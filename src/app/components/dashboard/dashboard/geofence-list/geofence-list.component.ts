import { Component, OnInit } from '@angular/core';
import { Geofence } from 'src/app/models/geofence';
import { GeofenceService } from 'src/app/services/geofence/geofence.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-geofence-list',
  templateUrl: './geofence-list.component.html',
  styleUrls: ['./geofence-list.component.scss']
})
export class GeofenceListComponent implements OnInit {

  geofenceList: Geofence[] = [];
  constructor(private geofenceService: GeofenceService, private modalService: NgbModal, 
    private mainService:MainService) { }

  ngOnInit(): void {
    this.getGeofeneceList();
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
   }
  deleteGeofence(g: Geofence) {
    this.geofenceService.deleteGeofence("/geofences/" + g.id).subscribe(res => {
      this.modalService.dismissAll();
    })

  }

}
