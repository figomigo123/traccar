import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';
import { DeviceService } from '../../../services/device/device.service';
import { GroupService } from '../../../services/group/group.service';
import { CategoryService } from '../../../services/category/category.service';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ArrayOfDevices, Device } from 'src/app/models/device';
import { Subscription } from 'rxjs';
import { Position } from 'src/app/models/position';
import { ModalComponent } from '../modal/modal.component';
import { DeviceStatusModalComponent } from './device-status-modal/device-status-modal.component';
import { ReportModalComponent } from './report-modal/report-modal.component';
import { EventModalComponent } from './event-modal/event-modal.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { NewUserComponent } from './new-user/new-user.component';
import { MainService } from 'src/app/services/main.service';
import { GeofenceListComponent } from './geofence-list/geofence-list.component';
import { NotificationsComponent } from '../../notifications/notifications/notifications.component';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { AddstatisticsComponent } from '../../addModules/addstatistics/addstatistics/addstatistics.component';
import { group } from 'console';
import { TreeNode } from 'primeng/api';
import { Tree } from 'primeng/tree';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;
  @ViewChild('tree') tree: Tree;

  title = 'Excel';
  groupsTree: TreeNode[] = []
  FilterdTree: TreeNode[] = []
  Filterd = false
  RighClickOnTree
  SelectedNode: TreeNode
  selectedFile:Device
  nodes = [

  ]
  AllgroupsTree;

  menus = [
    {
      level: 1,
      title: 'Menu',
      icon: 'setting',
      open: false,
      selected: false,
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Account',
          modulename: 'account',
          icon: 'bars',
          open: false,
          selected: false,
          disabled: false,

        },
        {
          level: 2,
          title: 'Groups',
          modulename: 'groups',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Drivers',
          modulename: 'drivers',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Geofences',
          modulename: 'geofences',

          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Servers',
          modulename: 'server',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Users',
          modulename: 'users',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Notifications',
          modulename: 'notifications',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Reports',
          modulename: 'reports',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Statistics',
          modulename: 'statistics',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Calendars',
          modulename: 'calendars',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Saved Commands',
          modulename: 'commands',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Maintenance',
          modulename: 'maintenance',
          icon: 'bars',
          selected: false,
          disabled: false
        },
        {
          level: 2,
          title: 'Logout',
          modulename: 'logout',
          icon: 'bars',
          selected: false,
          disabled: false
        }
      ]
    },

  ];
  isOpen = false

  NotifyisVisible
  map: L.Map;
  json;
  searchTxt: string = "";
  onlineDeviceCount: number = 0;
  offlineDeviceCount: number = 0;
  idleDeviceCount: number = 0;
  subsList: Subscription[] = [];
  TreeDevices: Device[] = [];

  positionList: Position[] = [];
  deviceLastPosition: {} = {};
  //Basic Map
  currentStatus = "all"
  options1 = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 5,
    center: L.latLng(20.5937, 78.9629)
  };

  constructor(private categoryService: CategoryService,
    private NZmodalService: NzModalService,
    private modalService: NgbModal,
    private deviceService: DeviceService,
    private groupService: GroupService,
    public router: Router,
    private mainService: MainService) { }

  devices: Device[] = [];
  otherDevices: any[] = []

  searchDeviceList: Device[] = [];
  groups;
  groupedDevices;
  isLoading = true;
  selectedDevice = null;
  console = console;
  categories = [];
  GeofencesDrawer = false;
  name;
  identifier;
  group;
  id
  phone;
  model;
  contact;
  category;
  disabled = false;

  selectedGroup = null;
  list_to_tree(list) {

    if (this.currentStatus != undefined && this.currentStatus != 'all') {
      const devices = this.devices.filter(x => { x.groupId == list && x.status == this.currentStatus; });
      return devices;

    } else {
      const devices = this.devices.filter(x => x.groupId == list);
      return devices;

    }
  }
  ngOnInit(): void {
    this.getMainData();
    this.categories = this.categoryService.getCategories();

    this.RighClickOnTree = [
      {label: 'View', icon: 'pi pi-search', command: (event) => this.showDeviceDetails(this.selectedFile)},
  ];
  }

  getMainData() {
    this.isLoading = true;
    this.deviceService.getDevices("/devices").subscribe((devices) => {
      // console.log(devices)
      // devices.map(x=>this.otherDevices[x.id]= x)
      // console.log(this.otherDevices[21])
      this.devices = devices;



      //this.list_to_tree(devices)
      //  this.searchDeviceList = devices.filter(x => true);
      this.calculateDeviceCounts(this.devices);
      this.listenToDeviceChange();
      this.listenToPositionChange();
     // this.getGroupTree('all')

      this.groupService.getGroups("/groups/list").subscribe((groups) => {
        this.groups = groups;
        const idMapping = groups.reduce((acc, el, i) => {
          acc[el.id] = i;
          return acc;
        }, {});

        let root: any[] = [];
        groups.forEach((el) => {
          // Handle the root element
          if (el.groupId == 0) {
            if (el.devices.length > 0) {
              el.devices.map(x => el.children.push(
                {
                  "label": x.name,
                  "data": "Node 0",
                  "leaf": true,
                  "id": x.id,
                  "groupId": x.groupId,
                  "status": x.status,
                  "key": x.id.toString(),
                  "devices": x,
                  'type': 'device'

                }));

            }
            el.key = el.label
            root.push(el);
            return;
          }

          // Use our mapping to locate the parent element in our data array
          var parentEl = groups[idMapping[el.groupId]];

  
          if (el.devices.length > 0) {
            el.devices.map(x => parentEl.children.push(
              {
                "label": x.name,
                "data": "Node 0",
                "leaf": true,
                "id": x.id,
                "groupId": x.groupId,
                "status": x.status,
                "key": x.id.toString(),
                "devices": x,
                'type': 'device'

              }));

          }
          parentEl.children.push({
            "label": el.label,
            "data": "Node 0",
            "leaf": true,
            "children": el.children,
            "id": el.id,
            "groupId": el.groupId,
            "key": el.label,

            'type': 'group'

          });
        });
        this.groupsTree = root
        this.AllgroupsTree = root

        //this.groupedDevices = this.merageDevicesGroups(devices, groups);
        this.isLoading = false;
      })
    })
  }


  ChangeDeviceCounts(oldstatus, newstatus) {
    console.log(oldstatus, newstatus)
    if (oldstatus == "offline") {
      this.offlineDeviceCount -= 1;
    }
    else if (oldstatus == "unknown") {
      this.idleDeviceCount -= 1;
    }
    else if (oldstatus == "online") {
      this.onlineDeviceCount -= 1;
      console.log(oldstatus, newstatus)

    }

    console.log(oldstatus, newstatus)

    if (newstatus == "offline") {
      this.offlineDeviceCount += 1;
    }
    else if (newstatus == "unknown") {
      this.idleDeviceCount += 1;
    }
    else if (newstatus == "online") {
      this.onlineDeviceCount += 1;
      console.log(oldstatus, newstatus)

    }

  }
  calculateDeviceCounts(deviceList: Device[]) {
    this.onlineDeviceCount = 0;
    this.offlineDeviceCount = 0;
    this.idleDeviceCount = 0;
    deviceList.forEach(d => {
      if (d.status == "offline") {
        this.offlineDeviceCount += 1;
      }
      else if (d.status == "unknown") {
        this.idleDeviceCount += 1;
      }
      else {
        this.onlineDeviceCount += 1;
      }
    })
  }

  merageDevicesGroups(devices, groups) {
    devices.forEach(device => {
      groups.forEach(group => {
        if (device['groupId'] == group['id']) {
          device['groupName'] = group['name'];
        }
      });
    });
    var grouped = _.mapValues(_.groupBy(devices, 'groupName'), clist => clist.map(device => _.omit(device, 'groupName')));
    return grouped;
  }

  selectDevice(device: Device) {


    this.selectedDevice = device;
    if (this.deviceLastPosition[device.id]) {
      this.deviceService.setFocusedDeviceOnMap({ device: device, pos: this.deviceLastPosition[device.id] });
    }

  }

  openDeviceModal(modal) {
    this.clearData();
    this.modalService.open(modal);
  }

  openEditDeviceModal(modal, device) {
    this.selectedDevice = device;

    this.id = this.selectedDevice['id'];

    this.name = this.selectedDevice['name'];
    this.identifier = this.selectedDevice['uniqueId'];
    this.group = this.selectedDevice['groupId'];
    this.phone = this.selectedDevice['phone'];
    this.model = this.selectedDevice['model'];
    this.contact = this.selectedDevice['contact'];
    this.category = this.selectedDevice['category'];
    this.disabled = this.selectedDevice['disabled'];
    this.modalService.open(modal);
  }

  addDevice(event) {
    event.preventDefault();
    let info = {
      name: this.name,
      uniqueId: this.identifier,
      status: 'offline',
      disabled: this.disabled,
      lastUpdate: "",
      positionId: 0,
      groupId: this.group,
      phone: this.phone,
      model: this.model,
      contact: this.contact,
      category: this.category,
      geofenceIds: [0],
      attributes: {}
    }
    this.deviceService.addDevice("/devices", info).subscribe((res) => {
      this.modalService.dismissAll();
      this.getMainData();
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Device Added Successfully!',
        confirmButtonColor: '#0162e8'
      })
    })
  }

  editDevice(event) {
    event.preventDefault();
    let info = {
      name: this.name,
      id: this.id,
      uniqueId: this.identifier,
      status: this.selectedDevice['status'],
      disabled: this.disabled,
      lastUpdate: this.selectedDevice['lastUpdate'],
      positionId: this.selectedDevice['positionId'],
      groupId: this.group,
      phone: this.phone,
      model: this.model,
      contact: this.contact,
      category: this.category,
      geofenceIds: this.selectedDevice['geofenceIds'],
      attributes: this.selectedDevice['attributes']
    }
    this.deviceService.editDevice("/devices/" + this.selectedDevice['id'], info).subscribe((res) => {
      this.modalService.dismissAll();
      this.getMainData();
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Device Edited Successfully!',
        confirmButtonColor: '#0162e8'
      })
    })
  }

  clearData() {
    this.selectedDevice = null;
    this.name = null;
    this.identifier = null;
    this.group = null;
    this.phone = null;
    this.model = null;
    this.contact = null;
    this.category = null;
    this.disabled = false;
  }

  deleteDevice() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this device!',
      showCancelButton: true,
      confirmButtonColor: '#0162e8',
      cancelButtonColor: '#0162e8',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.deviceService.deleteDevice("/devices/" + this.selectedDevice['id']).subscribe((res) => {
          this.selectedDevice = null;

          this.getMainData();
          Swal.fire({
            title: 'Deleted!',
            text: 'Device Deleted Successfully.',
            icon: 'success',
            confirmButtonColor: '#0162e8'
          })
        })
      }
    })
  }

  openGroupsModal(groupsModal) {
    this.modalService.open(groupsModal);
  }

  selectGroup(group) {
    this.selectedGroup = group;
  }


  deleteChild(selectedFile) {
    if (selectedFile && selectedFile.parent) {
        let index = selectedFile.parent.children.indexOf(selectedFile);
        console.log(index)
       selectedFile.parent.children.splice(index,1);
    }
}
  listenToDeviceChange() {
    let sub = this.deviceService.listenToDeviceUpdates().subscribe(data => {
      console.log(data)

      if (data) {

        if (this.groupsTree) {
          let node = this.tree.getNodeWithKey(data.id.toString(),  this.tree.filteredNodes != null ? this.tree.filteredNodes : this.tree.value)
          console.log(node)
         if (node == undefined){
          let nodes= this.tree.getNodeWithKey(data.id.toString(), this.groupsTree)
          console.log(nodes)

          if (data.status == this.currentStatus && nodes != undefined) { // لو حالة الداتا مختلفة
          
            this.SocketTreeUpdate(this.currentStatus) // في حالة عدد ابنائه بيساوي صفر بيعمل ابديت للشجرة

          }
  
            if (nodes != undefined) {
              this.ChangeDeviceCounts(nodes.status, data.status);
              nodes.devices = data
              nodes.status = data.status

            }

            }else {
              this.ChangeDeviceCounts(node.status, data.status);

              node.devices = data
              node.status = data.status
              if(this.tree.filteredNodes != null && data.status != this.currentStatus){
            //    node.parent.children =  node.parent.children.filter(x=>x.key != node.key)
            this.SocketTreeUpdate(this.currentStatus) // في حالة عدد ابنائه بيساوي صفر بيعمل ابديت للشجرة

              }

   
            }
    
        }
    }
    });
    this.subsList.push(sub);
   
}

nodeExpand(event) {
      //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
         console.log(event.node ) 
     this.SelectedNode = event.node
 
}
  listenToPositionChange() {
    let sub = this.deviceService.listenToPositionUpdate().subscribe(posList => {
      if (posList) {
        this.positionList = posList;
        this.positionList.forEach(p => {
          this.deviceLastPosition[p.deviceId] = p;
        });
        // console.log("Device Last Positions is ", this.deviceLastPosition);
      }

    });
    this.subsList.push(sub);
  }
  RefreshStatus() {
    let sub = this.deviceService.RefreshStatus().subscribe(posList => {

      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: posList,
        confirmButtonColor: '#0162e8'
      })
      console.log("Device Last Positions is ", posList);


    });
  }
  SocketTreeUpdate(Status): void {
    console.log(Status)
    //this.tree.findFilteredNodes.
   // console.log(this.tree.filteredNodes.filter(x=> x.id == 0))
   //let node = this.tre
   if (this.searchTxt == "") {

    this.tree.value = this.groupsTree
    this.tree._filter(this.currentStatus)
    this.tree.value = this.tree.filteredNodes
    this.tree._filter(Status)
    console.log(this.SelectedNode)
    if (this.SelectedNode){
      this.tree.getRootNode().map(x=>{if (x.id != this.SelectedNode.id){x.expanded = false}})     

    }else {
      this.tree.getRootNode().map(x=>x.expanded = false)     

    }

    }else {
      this.tree.value = this.groupsTree
      this.tree._filter(this.currentStatus)
      this.tree.value = this.tree.filteredNodes
      this.tree._filter(this.searchTxt)
 
    }

 

  }
  FilterByTextGroups(Status:string): void {
    console.log(Status)
    this.searchTxt = Status
    //this.tree.findFilteredNodes.
   // console.log(this.tree.filteredNodes.filter(x=> x.id == 0))
   //let node = this.tre
   if (Status == "") {
    this.tree.resetFilter()

   }else {
    if (this.searchTxt == "") {

    this.tree.value = this.groupsTree
    if (this.currentStatus != "all")
      {
        this.tree._filter(this.currentStatus)
        this.tree.value = this.tree.filteredNodes
      }    
    this.tree._filter(Status)
    }else {
      this.tree.value = this.groupsTree
      if (this.currentStatus != "all")
      {
        this.tree._filter(this.currentStatus)
        this.tree.value = this.tree.filteredNodes


      }
      
      this.tree._filter(this.searchTxt)
    }

   }



    //this.tree.filteredNodes = this.tree.filteredNodes.filter(x=> x.label == Status)

    //this.FilterdTree =  this.FilterdTree.filter(x=> x.id == 0)
    

  }
  FilterGroups(Status): void {
    this.deviceService.getDevices("/devices").subscribe((devices) => {
      this.calculateDeviceCounts(devices);

    })

    this.tree.value = this.groupsTree

    this.currentStatus = Status
    if (this.currentStatus == "all") {
      this.tree.resetFilter()
    }else {
    if (this.currentStatus == "idle") {
      this.currentStatus = "unknown"

    }
    this.tree._filter(this.currentStatus)
this.tree.getRootNode().map(x=>x.expanded = false)     
    }
  }
  ShowGeofencesDrawer() {

    this.GeofencesDrawer = !this.GeofencesDrawer
  }
  ngOnDestroy() {
    this.subsList.forEach(s => {
      if (s) {
        s.unsubscribe();
      }
    })
  }

  showDeviceDetails(device: Device) {
    
    const modalRef = this.modalService.open(DeviceStatusModalComponent);
    modalRef.componentInstance.device = device;
    modalRef.componentInstance.position = this.deviceLastPosition[device.id];


  }

  openReporModal() {
    this.modalService.open(ReportModalComponent);
  }

  openNewUserModal() {
    this.modalService.open(NewUserComponent);
  }

  openNotitifacationsModal(ModuleName, classIndex) {
    if (ModuleName == "statistics") {
      const modalRef = this.NZmodalService.create({
        nzTitle: ModuleName,
        nzStyle: { color: 'white' },

        nzContent: AddstatisticsComponent,
        nzWidth: "1000px",
      });
      modalRef.componentInstance.classname = ModuleName
      modalRef.componentInstance.classIndex = classIndex

    } else if (ModuleName == "logout") {
      this.router.navigate(['/login']);

    }
    else if (ModuleName == "account") {
      this.modalService.open(UserComponent);

    }
    else {
      const modalRef = this.NZmodalService.create({
        nzTitle: ModuleName,
        nzStyle: { color: 'white' },

        nzContent: NotificationsComponent,
        nzWidth: "1000px",
      });
      modalRef.componentInstance.classname = ModuleName
      modalRef.componentInstance.classIndex = classIndex
    }
  }
  openUserModal() {
    this.modalService.open(UserComponent);
  }
  openEventModal() {
    const modalRef = this.NZmodalService.create({
      nzTitle: "Events",
      nzStyle: { color: 'white' },

      nzContent: EventModalComponent,
      nzWidth: "1000px",
    });
  }
  openDashboard() {
    this.router.navigate(['/reports/dashboard/new']);

  }
  logout() {
    this.router.navigate(['/login']);

  }

  filterOnlineDevice() {
    // debugger
    this.calculateDeviceCounts(this.devices);
    return this.searchDeviceList.filter(x => x.status == "online");

  }

  filterOfflineDevice() {
    // debugger
    this.devices = this.searchDeviceList.filter(x => x.status == "offline");
    this.calculateDeviceCounts(this.devices);
  }

  filterIdleDevice() {
    debugger
    this.devices = this.searchDeviceList.filter(x => x.status == "unknown");
    this.calculateDeviceCounts(this.devices);
  }

  showAllDevices() {
    debugger
    this.devices = this.searchDeviceList.filter(x => true);
    this.calculateDeviceCounts(this.devices);
  }

  showGeofenceControl() {
    this.mainService.setShowControl(true);
  }

  showGeofenceList() {
    this.modalService.open(GeofenceListComponent);
  }



}
