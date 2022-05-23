import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    const listContainer = document.querySelector('#ChatList');
    const bodyContainer = document.querySelector('#ChatBody');
    
    const ps = new PerfectScrollbar(listContainer);
    const ps1 = new PerfectScrollbar(bodyContainer);
    

  }
}
