import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../serverUrl';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password")) }),
    withCredentials: true
  }
  GetStatusReport(){
    return this.http.get(`${apiUrl}/dashboard/devices`,   this.httpOptions
     ).toPromise();
}
GetDevicesReport(name){
  return this.http.get(`${apiUrl}/${name}/all`,   this.httpOptions
   ).toPromise();
}
AddDevicesReport(name,data){
  return this.http.post(`${apiUrl}/${name}/all`,data,   this.httpOptions
   ).toPromise();
}
GetEventsReport(){
  return this.http.get(`${apiUrl}/dashboard/events`,   this.httpOptions
   ).toPromise();
}
}
