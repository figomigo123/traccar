import { Component, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Subscription } from 'rxjs';
import { NavService } from '../../services/nav.service';
import { SidebarRightService } from '../../services/sidebar-right.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

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
    private sidebarRightservice: SidebarRightService,
    public navServices: NavService,
  ) {
    this.layoutSubscription = sidebarRightservice.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;

      }
    )
  }

  ngOnInit(): void {
  }
  toggleSidebarNotification() {
    this.sidebarRightservice.emitSidebarNotifyChange(true);
  }

  toggleSidebarOpen(){
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('.main-body').classList.add('sidenav-toggled');
    }
  }
  toggleSidebarClose(){
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector('.main-body').classList.remove('sidenav-toggled');
    }
  }



  ngAfterViewInit(){
    const sidemenu = document.querySelector('.app-sidebar' );
    let ps = new PerfectScrollbar(sidemenu, {wheelPropagation: false});

    const chat = document.querySelectorAll('.chat-scroll');
    let ps1 = new PerfectScrollbar(chat[0], {wheelPropagation: false});
    let ps2 = new PerfectScrollbar(chat[1], {wheelPropagation: false});

    const notification  = document.querySelectorAll('.Notification-scroll');
    let ps3 = new PerfectScrollbar(notification[0], {wheelPropagation: false});
    let ps4 = new PerfectScrollbar(notification[1], {wheelPropagation: false});

  }

}
