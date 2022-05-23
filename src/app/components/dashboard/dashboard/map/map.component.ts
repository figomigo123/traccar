import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import 'leaflet.markercluster';
import { socketUrl, apiUrl } from '../../../../services/serverUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Position } from 'src/app/models/position';
import { Device } from 'src/app/models/device';
import { Event } from 'src/app/models/event';
import { DeviceService } from 'src/app/services/device/device.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event/event.service';
import { MainService } from 'src/app/services/main.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Geofence } from 'src/app/models/geofence';
import { GeofenceComponent } from '../geofence/geofence.component';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: L.Map;
  allDevices: Device[] = [];
  markers: {} = {};
  markerCluster = L.markerClusterGroup();
  editableLayers: any;
  drawControl: any;



  constructor(private http: HttpClient,
    private deviceService: DeviceService,
    private datePipe: DatePipe,
    private toasterService: ToastrService,
    private eventService:EventService,
    private mainService:MainService, 
    private modalService:NgbModal) { }

  ngOnInit(): void {
    this.createMap();
    this.getShowGeofenceControl();
    this.listenToSelectedGeofence();


    this.createDemoData();
    this.getDevices().then(x => {
      this.getSession().then(a => {
        if (a) {
          this.openWebSocket();
          this.listenToFocusedDeviceOnMap();
        }
      })
    })


  }

  createMap() {
    let googleLayer = L.tileLayer("https://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}&s=Ga", {
      maxZoom: 18,
      attribution: ""
    });

    let googleSat = L.tileLayer("https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}&s=Ga", {
      maxZoom: 18,
      attribution: ""
    });
    let osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: ""
    });
    let arcGisTopo = L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png", {
      maxZoom: 18,
      attribution: ""
    });
    let arcGisImage = L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png", {
      maxZoom: 18,
      attribution: ""
    });
    let wikiMedia = L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution: ""
    });

    var baseMaps = {
      "OSM": osm,
      "Goole": googleLayer,
      "Google Sat": googleSat,
      "ArcGis Topo": arcGisTopo,
      "ArcGis Imagery": arcGisImage,
      "Wikimedia": wikiMedia,
    };

    this.map = L.map("anbMap", {
      zoom: 5,
      layers: [osm],
      center: L.latLng(21.4858, 39.1925)
    })

    L.control.layers(baseMaps).addTo(this.map);
    this.markerCluster.addTo(this.map);

    this.map.on("click", (ev) => {
      console.log(ev);
    })
  }

  openWebSocket() {
    let webSocket = new WebSocket(socketUrl);


    webSocket.onopen = () => {
// console.log("socket has been opened");
    }
    webSocket.onmessage = (ev) => {
      //debugger
      this.showDevicesOnMap(ev.data)
    }
    webSocket.onerror = (err) => {
     console.log("socket error", err);
    }




  }

  getSession() {
    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa(`'${localStorage.getItem("email")}:${localStorage.getItem("password")}'`)
      })
    };

    return new Promise<boolean>((acc, rej) => {

      this.http.get(apiUrl + "/session?token=" + localStorage.getItem("token"), httpOptions).subscribe(res => {

        if (res) {
          acc(true);
        }
        else {
          acc(false);
        }
      }, err => {
        acc(false);
      })
    });
  }

  showDevicesOnMap(data: any) {
    console.log(data)
    let positionList: Position[] = [];
    let deviceList: Device[] = [];
    let eventList: Event[] = [];


    let jsonData = JSON.parse(data);


    if (jsonData.positions) {
      positionList = jsonData.positions;
      this.deviceService.updatePositionData(positionList);
      for (let i = 0; i < positionList.length; i++) {
        let position: Position = positionList[i];
        let device: Device = this.allDevices.find(x => x.id == position.deviceId);
        //console.log(this.allDevices);
        if (device) {
          if (this.markers[device.id]) {
            //Update device Popup
            //Update Marker
  
  
            // let socketDevice = deviceList.find(x => x.id == device.id);
            // let marker = this.markers[device.id];
  
            //let d:Device = socketDevice ? socketDevice : device;
  
  
            let divIcon = this.createMarker(device);
            this.markers[device.id].setIcon(divIcon);
            this.markers[device.id].setLatLng([position.latitude, position.longitude]);
            this.updatePopupContent(this.markers[device.id], device, position);
  
          }
          else {
            // let icon = L.icon({
            //   iconUrl: '../../../../../assets/icons/default.svg',
            //   iconSize: [50, 50], // size of the icon
            //   shadowSize: [50, 64], // size of the shadow
            //   iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
            //   //shadowAnchor: [4, 62],  // the same for the shadow
            //   className: "icon-class",
            //   popupAnchor: [-0, -20] // point from which the popup should open relative to the iconAnchor
            // });
            let divIcon = this.createMarker(device);
            let marker = L.marker([position.latitude, position.longitude], { icon: divIcon });
           this.createPopup(marker, device, position);
            this.markerCluster.addLayer(marker);
            this.markers[device.id] = marker;
  
          }
        }
      }
    }
    if (jsonData.devices) {

      deviceList = jsonData.devices;
      // console.log(deviceList)

      this.deviceService.updateDeviceData(deviceList[0]);
      if (deviceList) {
        deviceList.forEach(d => {
          let dev = this.allDevices.find(x => x.id == d.id);
  
          if (dev) {
            dev.lastUpdate = d.lastUpdate;
            dev.status = d.status;
            dev.category = d.category;
            dev.positionId = d.positionId
          }
  
        });
      }
    }

    if (jsonData.events) {
      eventList = jsonData.events;
      if (eventList) {
        eventList.forEach(e => {
          if (e.type == "deviceStatusUnknown") {
            let d = this.allDevices.find(x => x.id == e.deviceId);
            d.status = "unknown"
          }
        })
      }
    }



   

  

  

    if (eventList) {
      for (let k = 0; k < eventList.length; k++) {
        this.eventService.addEvent(eventList[k]);
        this.toasterService.info(`${eventList[k].type} at ${eventList[k].eventTime} for device ${eventList[k].deviceId}`, 'alert', {
          positionClass: 'toast-center-center',
          closeButton: true,
          timeOut: 2000
        });
      }
    }


  }


  createMarker(device: Device) {

    let color: string = "#008000";
    if (device.status == "offline") {
      color = "#FF0000";
    }
    else if (device.status == "unknown") {

      color = "tomato"
    }
    else {
      color = "#008000";
    }

    if (device.uniqueId == "527329") {


    }

    const icon = L.divIcon({
      iconSize: [50, 50], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
      popupAnchor: [-0, -20],
      className: 'icon-class',
      html: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg id="svg4145" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
      xmlns="http://www.w3.org/2000/svg" height="40" width="40"
       version="1.1" xmlns:cc="http://creativecommons.org/ns#"
        xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 40 40">
       <g id="layer1">
        <path id="background" d="m20.002 3.6816l-1.131 3.3907a12.374 12.374 0 0 1 1.131 -0.0625 12.374 12.374 0 0 1 1.129 0.0566l-1.129-3.3848zm-0.002 3.9434a12.374 12.374 0 0 0 -12.375 12.375 12.374 12.374 0 0 0 12.375 12.375 12.374 12.374 0 0 0 12.375 -12.375 12.374 12.374 0 0 0 -12.375 -12.375z" stroke="#333" stroke-width="1.9"  class="stDevice${device.id}"/>
        <circle id="icon" cx="20" cy="20" r="5.8251"/>
       </g>
      </svg>

      <style>
      .stDevice${device.id}{
            fill: ${color} !important;
        }
      </style>


      `
    })
    return icon;
  }

  getDevices() {
    return new Promise<boolean>((acc, rej) => {
      this.deviceService.getAllDevices("/devices").subscribe(data => {
        if (data) {
          this.allDevices = data;
        }
        acc(true);
      }, err => {
        acc(false);
      });
    });
  }

  createPopup(marker: L.Marker, device: Device, pos: Position) {
    marker.bindPopup(`<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Device Name</label>
            <br>
            <span class="popup-data">${device.name}</span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Status</label>
            <br>
            <span class="popup-data">${device.status == "unknown" ? "idle" : device.status}</span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Imei No</label>
            <br>
            <span class="popup-data">${device.uniqueId}</span>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Last Update</label>
            <br>
            <span class="popup-data">${this.datePipe.transform(device.lastUpdate, "yyyy-MM-dd HH:mm:ss")}</span>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Location Lat - Lon</label>
            <br>
            <span class="popup-data">${pos.latitude} , ${pos.longitude} </span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Device Speed</label>
            <br>
            <span class="popup-data">${pos.speed} </span>
        </div>
    </div>
</div>`, {
      autoClose: false,
      closeOnClick: false,
      closeButton: true,
      maxWidth: 560
    });
  }

  updatePopupContent(marker: any, device: Device, pos: Position) {
    //debugger
console.log(marker)
    if (marker._popup != undefined)
    marker._popup.setContent(`<div class="row">
    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Device Name</label>
            <br>
            <span class="popup-data">${device.name}</span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Status</label>
            <br>
            <span class="popup-data">${device.status == "unknown" ? "idle" : device.status}</span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Imei No</label>
            <br>
            <span class="popup-data">${device.uniqueId}</span>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Last Update</label>
            <br>
            <span class="popup-data">${this.datePipe.transform(device.lastUpdate, "yyyy-MM-dd HH:mm:ss")}</span>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Location Lat - Lon</label>
            <br>
            <span class="popup-data">${pos.latitude} , ${pos.longitude} </span>
        </div>
    </div>

    <div class="col-md-6">
        <div class="form-group">
            <label class="popup-lable">Device Speed</label>
            <br>
            <span class="popup-data">${pos.speed} </span>
        </div>
    </div>
</div>`, {
      autoClose: false,
      closeOnClick: false,
      closeButton: true,
      maxWidth: 560
    });
  }

  createDemoData() {
    let icon = L.icon({
      iconUrl: '../../../../../assets/icons/default.svg',
      iconSize: [38, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    let marker1 = L.marker([21.515684321906235, 39.220504760742195], {
      icon: icon,
    })

    let marker2 = L.marker([21.401014846143617, 39.44209814071656], {
      icon: icon,
    });

    let marker3 = L.marker([21.90856903637056, 42.02952861785889], {
      icon: icon,
    });


    let marker4 = L.marker([24.64116619944383, 46.71373844146729], {
      icon: icon,
    });

    let marker5 = L.marker([24.646139535627235, 46.70140027999878], {
      icon: icon,
    });

    this.createPopup(marker1, {
      attributes: {},
      category: 'car',
      contact: '',
      disabled: false,
      geofenceIds: [],
      groupId: 0,
      id: 1,
      lastUpdate: '2021-09-27 10:25:00',
      model: 'car',
      name: "Device1",
      phone: "",
      positionId: 1,
      status: "offline",
      uniqueId: '12633001',


    }, {
      accuracy: 0,
      address: "",
      altitude: 0,
      attributes: {},
      course: 0,
      deviceId: 1,
      deviceTime: '2021-09-27 10:25:00',
      fixTime: '2021-09-27 10:25:00',
      id: 1,
      latitude: 21.5156843,
      longitude: 39.220504,
      network: {},
      outdated: false,
      protocol: "OSMAND",
      serverTime: '2021-09-27 10:25:00',
      speed: 0,
      valid: true

    });
    this.createPopup(marker2, {
      attributes: {},
      category: 'car',
      contact: '',
      disabled: false,
      geofenceIds: [],
      groupId: 0,
      id: 1,
      lastUpdate: '2021-09-27 10:25:00',
      model: 'car',
      name: "Device2",
      phone: "",
      positionId: 1,
      status: "offline",
      uniqueId: '12633002',


    }, {
      accuracy: 0,
      address: "",
      altitude: 0,
      attributes: {},
      course: 0,
      deviceId: 1,
      deviceTime: '2021-09-27 10:25:00',
      fixTime: '2021-09-27 10:25:00',
      id: 1,
      latitude: 21.40101484,
      longitude: 39.4420981,
      network: {},
      outdated: false,
      protocol: "OSMAND",
      serverTime: '2021-09-27 10:25:00',
      speed: 0,
      valid: true

    });
    this.createPopup(marker3, {
      attributes: {},
      category: 'car',
      contact: '',
      disabled: false,
      geofenceIds: [],
      groupId: 0,
      id: 1,
      lastUpdate: '2021-09-27 10:25:00',
      model: 'car',
      name: "Device3",
      phone: "",
      positionId: 1,
      status: "offline",
      uniqueId: '12633003',


    }, {
      accuracy: 0,
      address: "",
      altitude: 0,
      attributes: {},
      course: 0,
      deviceId: 1,
      deviceTime: '2021-09-27 10:25:00',
      fixTime: '2021-09-27 10:25:00',
      id: 1,
      latitude: 21.90856903,
      longitude: 42.0295286,
      network: {},
      outdated: false,
      protocol: "OSMAND",
      serverTime: '2021-09-27 10:25:00',
      speed: 0,
      valid: true

    });
    this.createPopup(marker4, {
      attributes: {},
      category: 'car',
      contact: '',
      disabled: false,
      geofenceIds: [],
      groupId: 0,
      id: 1,
      lastUpdate: '2021-09-27 10:25:00',
      model: 'car',
      name: "Device4",
      phone: "",
      positionId: 1,
      status: "offline",
      uniqueId: '12633004',


    }, {
      accuracy: 0,
      address: "",
      altitude: 0,
      attributes: {},
      course: 0,
      deviceId: 1,
      deviceTime: '2021-09-27 10:25:00',
      fixTime: '2021-09-27 10:25:00',
      id: 1,
      latitude: 24.6411661,
      longitude: 46.713738,
      network: {},
      outdated: false,
      protocol: "OSMAND",
      serverTime: '2021-09-27 10:25:00',
      speed: 0,
      valid: true

    });
    this.createPopup(marker5, {
      attributes: {},
      category: 'car',
      contact: '',
      disabled: false,
      geofenceIds: [],
      groupId: 0,
      id: 1,
      lastUpdate: '2021-09-27 10:25:00',
      model: 'car',
      name: "Device5",
      phone: "",
      positionId: 1,
      status: "offline",
      uniqueId: '12633005',


    }, {
      accuracy: 0,
      address: "",
      altitude: 0,
      attributes: {},
      course: 0,
      deviceId: 1,
      deviceTime: '2021-09-27 10:25:00',
      fixTime: '2021-09-27 10:25:00',
      id: 1,
      latitude: 24.6461395,
      longitude: 46.701400,
      network: {},
      outdated: false,
      protocol: "OSMAND",
      serverTime: '2021-09-27 10:25:00',
      speed: 0,
      valid: true

    });
    this.markerCluster.addLayers([
      marker1,
      marker2,
      marker3,
      marker4,
      marker5,
    ])

    this.markerCluster.addTo(this.map);
    // marker1.addTo(this.map)
    // marker2.addTo(this.map)
    // marker3.addTo(this.map)
    // marker4.addTo(this.map)
    // marker5.addTo(this.map)
  }

  listenToFocusedDeviceOnMap() {
    this.deviceService.getFocusedDeviceOnMap().subscribe(res => {
      if (res) {
        this.map.setView([res.pos.latitude, res.pos.longitude], 20)
      }
    })
  }

  getShowGeofenceControl(){
    this.mainService.getShowControl().subscribe(res=>{
      if(res){
        this.showDrawControl();
      }
    })
  }

  showGeofenceModal(){
    this.modalService.open(GeofenceComponent);

  }


  showGeofenceOnMap(g:Geofence){
   
    let polygonPoints: [lat: any, lon: any][] = [];
   
    let latLon: string[];
    let centerPoint: { lat: any, lng: any } = { lat: 0, lng: 0 };
    if (g.area.includes("POLYGON")) {
      latLon = g.area.replace("POLYGON((", "").replace("))", "").split(",");
      latLon.forEach(cord => {
        let point: string[] = cord.split(" ");
        polygonPoints.push([point[0], point[1]])

      });



      let polygon = new L.Polygon([polygonPoints],);
      polygon.bindTooltip(g.name,
        { permanent: false, direction: "center" }
      ).openTooltip();

      polygon.addTo(this.map);

      polygonPoints = [];
      centerPoint = polygon.getBounds().getCenter();
      this.map.flyTo([centerPoint.lat,centerPoint.lng], 6)

    }
    else if (g.area.includes("CIRCLE")) {
      latLon = g.area.replace("CIRCLE (", "").replace(")", "").split(",");
      let point: string[] = latLon[0].split(" ");
      centerPoint.lat = point[0];
      centerPoint.lng = point[1];
console.log(latLon[1])
      let circle = L.circle([centerPoint.lat, centerPoint.lng], Number(latLon[1]));
      circle.bindTooltip(g.name,
        { permanent: false, direction: "center" }
      ).openTooltip();
   
      this.map.flyTo([centerPoint.lat,centerPoint.lng], 6)
      circle.addTo(this.map);
    }
  }

  listenToSelectedGeofence()
  {
    this.mainService.getSelectedGeofenc().subscribe(res=>{
      if(res){
        this.showGeofenceOnMap(res);
      }
      this.modalService.dismissAll();
    })
  }

  showDrawControl() {
    this.editableLayers = new L.FeatureGroup();
    this.map.addLayer(this.editableLayers);
    var options: any = {
      position: 'topleft',
      collapsed: true,

      edit: {
        featureGroup: this.editableLayers,
        poly: {
          allowIntersection: false
        }
      },

      draw: {
        polygon: {
          allowIntersection: false,
          showArea: true
        }
      }

    };



    this.drawControl = new L.Control.Draw(options);
    this.map.addControl(this.drawControl);
    let self = this;
    this.map.on(L.Draw.Event.CREATED, function (e) {
      var layer = e.layer;
      var type = (e as L.DrawEvents.Created).layerType;
      if (type === 'circle') {
        var theCenterPt = layer.getLatLng();
        var theRadius = layer.getRadius();
        self.editableLayers.addLayer(layer);
        var latlonStr = "CIRCLE(" + theCenterPt.lat + " " + theCenterPt.lng + "," + theRadius / 1000 + ")";
        self.mainService.setSelectedGeofenceArea(latlonStr);
        

      }
      else if (type === 'polygon') {
        let latlngs: [{ lat, lng }] = layer.editing.latlngs[0][0];
        var latlonStr = "";
        if (latlngs) {
          latlngs.forEach(latlon => {
            latlonStr = latlonStr + latlon.lat + " " + latlon.lng + ",";
          })
        }
        self.editableLayers.addLayer(layer);
        latlonStr = "POLYGON((" + latlonStr.slice(0, latlonStr.length - 1) + "))";
        self.mainService.setSelectedGeofenceArea(latlonStr);
        
      }
      else if (type === 'circlemarker') {



        self.editableLayers.addLayer(layer);
        

      }
      else if (type === 'polyline') {
        self.editableLayers.addLayer(layer)
        let latlngs: [{ lat, lng }] = layer.getLatLngs();
        var latlonStr = "";
        if (latlngs) {
          latlngs.forEach(latlon => {
            latlonStr = latlonStr + latlon.lat + " " + latlon.lng + ",";
          })
        }

        latlonStr = "LINESTRING (" + latlonStr.slice(0, latlonStr.length - 1) + ")";
        self.mainService.setSelectedGeofenceArea(latlonStr);
      }
      else if (type === 'rectangle') {
        self.editableLayers.addLayer(layer);
        let latlngs: [{ lat, lng }] = layer.getLatLngs();
        var latlonStr = "";
        if (latlngs) {
          latlngs.forEach(latlon => {
            latlonStr = latlonStr + latlon.lat + " " + latlon.lng + ",";
          })
        }
        self.editableLayers.addLayer(layer);
        latlonStr = "POLYGON((" + latlonStr.slice(0, latlonStr.length - 1) + "))";
        self.mainService.setSelectedGeofenceArea(latlonStr);
      }
      self.showGeofenceModal();
      // else if (type === 'marker') {
      //   self.editableLayers.addLayer(layer)
      // }
    });
  }


}
