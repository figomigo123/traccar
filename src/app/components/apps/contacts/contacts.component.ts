import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    const contactList1 = document.querySelector('#mainContactList');
   
    let ps1 = new PerfectScrollbar(contactList1, {
      useBothWheelAxes:true,
      suppressScrollX:true,
    });

  }
}
