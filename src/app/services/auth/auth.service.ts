import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../serverUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'}),
    withCredentials: true
  }

  createSession(file, info) {
		return this.http.post(apiUrl + file, info, this.httpOptions);
  }
getuser(id){

  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': "Basic " + btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))}),
    withCredentials: true,
  }
  return this.http.get(apiUrl + "/users/"+id, httpOptions);

}
  isAuthenticated() {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': "Basic " + btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))}),
      withCredentials: true,
    }
    return this.http.get(apiUrl + "/session?token="+localStorage.getItem("token"), httpOptions);
  }

  updateUser(file, info) {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': "Basic " + btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))}),
      withCredentials: true
    }
		return this.http.put(apiUrl + file, info, httpOptions);
  }

  addUser(file, info) {
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': "Basic " + btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))}),
      withCredentials: true
    }
		return this.http.post(apiUrl + file, info, httpOptions);
  }
}
