import { Component, OnInit } from '@angular/core';
import { Geofence } from 'src/app/models/geofence';
import { GeofenceService } from 'src/app/services/geofence/geofence.service';
import { MainService } from 'src/app/services/main.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.component.html',
  styleUrls: ['./geofence.component.scss']
})
export class GeofenceComponent implements OnInit {
  name: string = "";
  description: string = "";


  constructor(private geofenceService: GeofenceService, private mainService: MainService, private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  save() {
    this.mainService.getSelectedGeofenceArea().subscribe(area => {
      let geofence: Geofence = {
        attributes: {},
        calendarId: 0,
        area: area,
        description: this.description,
        id: 0,
        name: this.name
      };

      this.geofenceService.addGeofence("/geofences", geofence).subscribe(res => {
        if (res) {
          this.modalService.dismissAll();
        }
      });
    });

  }

}
