import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../serverUrl';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password"))}),
    withCredentials: true
  }

  getCalendars(file) {
		return this.http.get(apiUrl + file, this.httpOptions);
  }
}
