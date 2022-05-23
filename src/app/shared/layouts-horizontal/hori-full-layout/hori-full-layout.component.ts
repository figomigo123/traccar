import {Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
@Component({
  selector: 'app-hori-full-layout',
  templateUrl: './hori-full-layout.component.html',
  styleUrls: ['./hori-full-layout.component.scss']
})
export class HoriFullLayoutComponent implements OnInit {


  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
    ) { }

  ngOnInit(): void {
  }

  // ngAfterViewInit() {
  //   new PerfectScrollbar('.sidebar-right1', {
  //     useBothWheelAxes: true,
  //     suppressScrollX: true
  //   });
  // }

  clickonBody(){
    document.querySelector('.main-body').classList.remove('main-navbar-show')  
    document.querySelector('.main-body').classList.remove('active');
    document.querySelector('.sidebar').classList.remove('sidebar-open')     
  }
 

}
