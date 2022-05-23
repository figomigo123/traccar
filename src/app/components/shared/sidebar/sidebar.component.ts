import { Component, AfterViewInit, OnInit } from '@angular/core';
import { BranchesROUTES, ResTaurantROUTES, ROUTES, OperationsROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';
declare var $: any;

@Component({
  selector: 'mainapp-sidebar',
  templateUrl: './sidebar.component.html'
})
export class mainSidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  ResturantName = localStorage.getItem("RestaurantName")
  ResturantPhoto = localStorage.getItem("RestaurantLogo")

  public sidebarnavItems: any[];
  // this is for the open close2
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  logout(){

    localStorage.setItem("token","null")
    this.router.navigate(['/authentication/login']);

  }
  // End open close
  ngOnInit() {
    console.log(localStorage.getItem("RestaurantId"))

    if (parseInt(localStorage.getItem("user_group_id")) == 7) {
      this.sidebarnavItems = OperationsROUTES.filter(sidebarnavItem => sidebarnavItem);
      return
    }
    
      this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);

  
    
  }
}
