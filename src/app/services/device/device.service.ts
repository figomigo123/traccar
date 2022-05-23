import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../serverUrl';
import { Device } from 'src/app/models/device';
import { BehaviorSubject } from 'rxjs';
import { Position } from 'src/app/models/position';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private sharedDeviceDataSubjec: BehaviorSubject<Device> = new BehaviorSubject(null);
  private sharedPositionSubject: BehaviorSubject<Position[]> = new BehaviorSubject(null);
  private focusedDeviceSubject:BehaviorSubject<{device:Device, pos:Position}> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password")) }),
    withCredentials: true
  }

  getDevices(file) {
    return this.http.get<Device[]>(apiUrl + file, this.httpOptions);
  }

  addDevice(file, info) {
    return this.http.post(apiUrl + file, info, this.httpOptions);
  }

  editDevice(file, info) {
    return this.http.put(apiUrl + file, info, this.httpOptions);
  }

  deleteDevice(file) {
    return this.http.delete(apiUrl + file, this.httpOptions);
  }
  getAllDevices(file) {
    return this.http.get<Device[]>(apiUrl + file, this.httpOptions);
  }

  updateDeviceData(deviceList: Device) {
    this.sharedDeviceDataSubjec.next(deviceList);
  }

  listenToDeviceUpdates() {
    return this.sharedDeviceDataSubjec.asObservable();
  }

  updatePositionData(positionList:Position[]){
    this.sharedPositionSubject.next(positionList);
  }

  listenToPositionUpdate(){
    return this.sharedPositionSubject.asObservable();
  }
  setFocusedDeviceOnMap(focusedDevice:{device:Device, pos:Position}){
    this.focusedDeviceSubject.next(focusedDevice);
  }

  getFocusedDeviceOnMap(){
    return this.focusedDeviceSubject.asObservable();
  }

  RefreshStatus(){
    return this.http.get<any>(apiUrl+"/commands/refreshall", this.httpOptions);

  }
}
