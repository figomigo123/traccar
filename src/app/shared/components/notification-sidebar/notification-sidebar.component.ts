import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { SidebarRightService } from '../../services/sidebar-right.service';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.scss']
})
export class NotificationSidebarComponent implements OnInit {
  layoutSub;

  @ViewChild('sidebar', {static: false}) sidebar: ElementRef;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private sidebarRightService: SidebarRightService
  ) {
    this.layoutSub = sidebarRightService.SidebarNotifyChangeEmitted.subscribe(
      value => {
        if (document.querySelector('.sidebar').classList.value  == "sidebar sidebar-right sidebar-animate ps ps--active-y ") {
          this.renderer.removeClass(this.sidebar.nativeElement , 'sidebar-open');
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'sidebar-open');
        }
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  onClose(){
    this.renderer.removeClass(this.sidebar.nativeElement, 'sidebar-open');
  }
  ngAfterViewInit(){
    const sidebar = document.querySelector('.sidebar-right');
    let ps = new PerfectScrollbar(sidebar, {wheelPropagation: false});

    
  }


}
