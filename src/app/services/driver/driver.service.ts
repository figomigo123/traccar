import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../serverUrl';
import { Driver } from 'src/app/models/driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))}),
    withCredentials: true
  }

  getDrivers(file) {
		return this.http.get<Driver[]>(apiUrl + file, this.httpOptions);
  }

  addDriver(file, info) {
		return this.http.post(apiUrl + file, info, this.httpOptions);
  }

  editDriver(file, info) {
		return this.http.put(apiUrl + file, info, this.httpOptions);
  }

  deleteDriver(file) {
		return this.http.delete(apiUrl + file, this.httpOptions);
  }

}
