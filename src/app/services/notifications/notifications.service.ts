import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationModel } from 'src/app/components/notifications/model/NotificationModel';
import { apiUrl } from '../serverUrl';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password")) }),
    withCredentials: true
  }
  GetNotificationsTypes() {
    return this.http.get<any>(`${apiUrl}/notifications/types`, this.httpOptions
    ).toPromise();
  }
  GetNotifications(classname) {
    return this.http.get<NotificationModel[]>(`${apiUrl}/${classname}`, this.httpOptions
    ).toPromise();
  }
  GetNotificationsForIndex(classname) {
    return this.http.get<any>(`${apiUrl}/${classname}/view`, this.httpOptions
    ).toPromise();
  }

  AddPermissions(data) {
    return this.http.post<any>(`${apiUrl}/permissions`, data, this.httpOptions
    ).toPromise();
  }
  DeletePermissions(data) {


let options = { body:data  ,headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password")) }),
withCredentials: true };
    return this.http.request<any>("DELETE",`${apiUrl}/permissions`,options
    ).toPromise();
  }
  GetUserPermissions(classname,PermissionsId) {
    return this.http.get<any>(`${apiUrl}/${classname}?${PermissionsId}`, this.httpOptions
    ).toPromise();
  }
  Delete(classname, id) {
    return this.http.delete<NotificationModel[]>(`${apiUrl}/${classname}/${id}`, this.httpOptions
    ).toPromise();
  }
  PUT(classname, data, id) {
    return this.http.put<NotificationModel[]>(`${apiUrl}/${classname}`, data, this.httpOptions
    ).toPromise();
  }
  edit(classname, data, id) {
    return this.http.put<NotificationModel[]>(`${apiUrl}/${classname}/${id}`, data, this.httpOptions
    ).toPromise();
  }
  add(classname, data) {
    return this.http.post<NotificationModel[]>(`${apiUrl}/${classname}`, data, this.httpOptions
    ).toPromise();
  }
}
