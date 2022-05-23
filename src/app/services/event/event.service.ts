import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type } from 'os';
import {BehaviorSubject, from} from 'rxjs';
import { Event } from 'src/app/models/event';
import { apiUrl } from '../serverUrl';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    private eventListSubject:BehaviorSubject<Event[]> = new BehaviorSubject([]);
    private eventList:Event[] =[];

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password")) }),
        withCredentials: true
      }
constructor(private http: HttpClient){

}

    getEvents(){
        return this.eventListSubject.asObservable();
    }
    getEventsFromDatabase(page){
        return this.http.get<Event>(`${apiUrl}/events/all?size=10&page=${page ?? 1}`, this.httpOptions);
        
           
        
    }
    addEvent(e:Event){
        this.eventList.push(e);
        this.eventListSubject.next(this.eventList);
    }

}