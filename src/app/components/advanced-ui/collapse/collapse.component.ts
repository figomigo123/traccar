import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  isCollapsed: boolean = false;
  isFirstCollapsed: boolean = false;
  isSecondCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    this.isCollapsed = !this.isCollapsed;
  }
  
  first(){
    this.isFirstCollapsed = !this.isFirstCollapsed;
  }
  second() {
    this.isSecondCollapsed = !this.isSecondCollapsed;
  }
  both() {
    this.isFirstCollapsed = !this.isFirstCollapsed;
    this.isSecondCollapsed = !this.isSecondCollapsed;

  }
}
