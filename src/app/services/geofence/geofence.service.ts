import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geofence } from 'src/app/models/geofence';
import { apiUrl } from '../serverUrl';

@Injectable({
  providedIn: 'root'
})
export class GeofenceService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password")) }),
    withCredentials: true
  }

  getGeofences(file) {
    return this.http.get<Geofence[]>(apiUrl + file, this.httpOptions);
  }

  addGeofence(file, info) {
    return this.http.post(apiUrl + file, info, this.httpOptions);
  }

  editGeofence(file, info) {
    return this.http.put(apiUrl + file, info, this.httpOptions);
  }

  deleteGeofence(file) {
    return this.http.delete(apiUrl + file, this.httpOptions);
  }
  
}
