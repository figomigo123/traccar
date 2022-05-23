import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  eventList:Event
  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.listetenToEvent();
  }
  nzPageIndexChange(page){
    this.eventService.getEventsFromDatabase(page).subscribe(res=>{
      if(res){
        this.eventList = res;
      }
    });
    
    //this.get(id,true)
  }
  listetenToEvent(){
    this.eventService.getEventsFromDatabase(1).subscribe(res=>{
      if(res){
        this.eventList = res;
      }
    });
  }

}
