import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Geofence } from 'src/app/models/geofence';
import { GeofenceService } from 'src/app/services/geofence/geofence.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-geofences-drawer',
  templateUrl: './geofences-drawer.component.html',
  styleUrls: ['./geofences-drawer.component.scss']
})
export class GeofencesDrawerComponent implements OnInit {


  geofenceList: Geofence[] = [];
  constructor(private geofenceService: GeofenceService, private modalService: NgbModal, 
    private mainService:MainService) { }
  @Input("visible") visible = false;
  @Output("close") closes = new EventEmitter<boolean>();

  open(): void {
    this.visible = true;
  }
  getGeofeneceList() {
    this.geofenceService.getGeofences("/geofences").subscribe(res => {
      console.log("Geofence Data is ", res);
      if (res) {
        this.geofenceList = res;
      }
    });
  }

  showOnMap(g: Geofence) {
    this.mainService.setSelectedGeofence(g);
    this.closes.emit(false);

   }
  deleteGeofence(g: Geofence) {
    this.geofenceService.deleteGeofence("/geofences/" + g.id).subscribe(res => {
      this.closes.emit(false);

    })

  }
  close(): void {
    this.visible = false;
    this.closes.emit(false);
  }
  ngOnInit(): void {
    this.getGeofeneceList()
  }
  ngOnChanges(changes: SimpleChanges) {
    this.getGeofeneceList()
  }
}
