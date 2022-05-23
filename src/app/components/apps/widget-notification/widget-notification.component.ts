import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-notification',
  templateUrl: './widget-notification.component.html',
  styleUrls: ['./widget-notification.component.scss']
})
export class WidgetNotificationComponent implements OnInit {
  isClosed: boolean = false;
  isClosed1: boolean = false;
  isClosed2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  Closetoggle() {
    this.isClosed = true
  }
  Closetoggle1() {
    this.isClosed1 = true
  }
  Closetoggle2() {
    this.isClosed2 = true
  }
}
