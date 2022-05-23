import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { HorizontalNavService } from '../../services/horizontal-nav.service';
import { SidebarRightService } from '../../services/sidebar-right.service';

@Component({
  selector: 'app-hori-header',
  templateUrl: './hori-header.component.html',
  styleUrls: ['./hori-header.component.scss']
})
export class HoriHeaderComponent implements OnInit {


  toggleClass = "fe fe-maximize";
  layoutSubscription: Subscription;
  public isCollapsed = true;
  categories = [
    { id: 1, name: 'IT Projects' },
    { id: 2, name: 'Business Case' },
    { id: 3, name: 'Microsoft Project' },
    { id: 4, name: 'Risk Management' },
    { id: 5, name: 'Team Building' },
  ]
  constructor(
    private SidebarRightService: SidebarRightService,
    private horizontalNavService: HorizontalNavService,
    public router: Router
  ) {
    // this.layoutSubscription = sidebarRightservice.changeEmitted.subscribe(
    //   direction => {
    //     const dir = direction.direction;

    //   }
    // )
  }

  ngOnInit(): void {
  }

  toggleSidebarNotification() {
    this.SidebarRightService.emitSidebarNotifyChange(true);
  }

  sidebar: boolean = false;
  toggleSidebar(){
    // if(sidebar = !sidebar){...}
    if (document.querySelector('.main-body').classList.value == "main-body app sidebar-mini Light-mode") {
      document.querySelector('.main-body').classList.add('main-navbar-show');
      document.querySelector('.main-body').classList.add('active');
    }
    else {
      document.querySelector('.main-body').classList.remove('main-navbar-show');
      document.querySelector('.main-body').classList.remove('active');
    }
  }


  ngAfterViewInit(){

    const chat = document.querySelectorAll('.chat-scroll');
    let ps1 = new PerfectScrollbar(chat[0], {wheelPropagation: false});
    let ps2 = new PerfectScrollbar(chat[1], {wheelPropagation: false});

    const notification  = document.querySelectorAll('.Notification-scroll');
    let ps3 = new PerfectScrollbar(notification[0], {wheelPropagation: false});
    let ps4 = new PerfectScrollbar(notification[1], {wheelPropagation: false});
  }
  


}
