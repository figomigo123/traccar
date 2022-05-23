import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../serverUrl';
import { Group } from 'src/app/models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))}),
    withCredentials: true
  }

  getGroups(file) {
		return this.http.get<Group[]>(apiUrl + file, this.httpOptions);
  }
  SearchGroupsTree(file) {
		return this.http.post<any>(apiUrl + file, this.httpOptions);
  }
  getGroupsTree(file) {
		return this.http.get<any>(apiUrl + file, this.httpOptions);
  }
  addGroup(file, info) {
		return this.http.post(apiUrl + file, info, this.httpOptions);
  }

  editGroup(file, info) {
		return this.http.put(apiUrl + file, info, this.httpOptions);
  }

  deleteGroup(file) {
		return this.http.delete(apiUrl + file, this.httpOptions);
  }

}
