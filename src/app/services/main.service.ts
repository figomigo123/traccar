import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Geofence } from "../models/geofence";
@Injectable()
export class MainService { 
    
    showControlSubject:BehaviorSubject<boolean> = new BehaviorSubject(false);
    selectedGeofenceAreaSubject:BehaviorSubject<string> = new BehaviorSubject("");
    selectedGeofenceSubject:BehaviorSubject<Geofence> = new BehaviorSubject(null);

    constructor(){}
     setShowControl(val:boolean)
     {
         this.showControlSubject.next(val);
     }

     getShowControl()
     {
         return this.showControlSubject.asObservable();
     }

     setSelectedGeofenceArea(val:string)
     {
         this.selectedGeofenceAreaSubject.next(val);
     }

     getSelectedGeofenceArea()
     {
         return this.selectedGeofenceAreaSubject.asObservable();
     }

     setSelectedGeofence(val:Geofence)
     {
         this.selectedGeofenceSubject.next(val);
     }

     getSelectedGeofenc()
     {
         return this.selectedGeofenceSubject.asObservable();
     }

     


}