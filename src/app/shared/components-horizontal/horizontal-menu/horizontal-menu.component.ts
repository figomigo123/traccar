import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import { HorizontalMenu, HorizontalNavService } from '../../services/horizontal-nav.service';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit {

  public menuItems: HorizontalMenu[];
  public url: any;
  SMcondition:any ;
  NScondition:any;

  constructor(
    private router: Router,
    private horizontalNavService: HorizontalNavService,
    public elRef: ElementRef
  ) {
    this.horizontalNavService.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) { 
              this.setNavActive(items);
            }
            if (!items.children) { return false; }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) { return false; }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
            });
          });
        }
      })
    })
  }
  

  //Active NavBar State
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        document.querySelector('.main-body').classList.remove('main-navbar-show')  
        document.querySelector('.main-body').classList.remove('active');
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  // Click Toggle menu
  toggleNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) { return false; }
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }
          if(!b.children){ return false;}
          b.children.forEach(c => {
          if(b.children.includes(item)){
            c.active = false;
          }
        });
        
        })
      });
    }
    item.active = !item.active;
  }


  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(e){
    if(window.innerWidth <= 992){
      document.querySelector('.horizontalMenu').classList.add('overflow-hidden')
      const sidebar = document.querySelector('.side-menu');
      let ps = new PerfectScrollbar(sidebar,  { wheelPropagation: false });
    }
    else{
      document.querySelector('.horizontalMenu').classList.remove('overflow-hidden')
    }
    
  }

  ngAfterViewInit(){
    

      if(window.innerWidth <= 992){
        document.querySelector('.horizontalMenu').classList.add('overflow-hidden')
        const sidebar = document.querySelector('.side-menu');
        let ps = new PerfectScrollbar(sidebar,  { wheelPropagation: false });
  
      }
      else{
        document.querySelector('.horizontalMenu').classList.remove('overflow-hidden')
      }
  }
}
