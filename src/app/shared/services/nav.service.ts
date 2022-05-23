import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

  //Menu Bar
  export interface Menu {
    headTitle?: string,
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
  }

@Injectable({
  providedIn: 'root'
})


export class NavService implements OnDestroy {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  public fullScreen: boolean = false;
  constructor(
      private router: Router
  ) {
      this.setScreenWidth(window.innerWidth);
      fromEvent(window, 'resize').pipe(
          debounceTime(1000),
          takeUntil(this.unsubscriber)
      ).subscribe((evt: any) => {
          this.setScreenWidth(evt.target.innerWidth);
          if (evt.target.innerWidth < 991) {
              this.collapseSidebar = false;
              this.megaMenu = false;
          }
          if (evt.target.innerWidth < 1199) {
              this.megaMenuCollapse = true;
          }
      });
      if (window.innerWidth < 991) {
          this.router.events.subscribe(event => {
              this.collapseSidebar = false;
              this.megaMenu = false;
          });
      }
  }


    ngOnDestroy() {
        this.unsubscriber.next();
        this.unsubscriber.complete();
    }
    
    private setScreenWidth(width: number): void {
        this.screenWidth.next(width);
    }

    MENUITEMS:Menu[] = [
      //Title
      { headTitle:'DASHBOARD'},
      {
       path: '/dashboard', title:' Dashboard', type: 'link', icon: 'ti-desktop', active: true
      },
     
      //Title
      { headTitle:'WIDGETS & MAPS'},
      {
        path: '/widgets', title: 'Widgets', icon: ' ti-package', type: 'link', active: false
      },
      {
        title: 'Mail', icon: ' ti-email', type: 'sub', badgeType: 'warning', badgeValue: '5', active: false, 
        children: [          
          { path: '/mail/mail', title: 'Mail', type: 'link' },
          { path: '/mail/mail-compose', title: 'Mail Compose', type: 'link' },
          { path: '/mail/read-mail', title: 'Read-mail', type: 'link' },
          { path: '/mail/mail-settings', title: 'Mail-settings', type: 'link' },
          { path: '/mail/chat', title: 'Chat', type: 'link' }
        ]
      },
      {
        title: 'Apps', icon: 'ti-briefcase', type: 'sub', active: false,
        children:[
          { path: '/apps/cards', title: 'Cards', type: 'link' },
          { path: '/apps/draggablecards', title: 'DraggableCards', type: 'link' },
          { path: '/apps/range-slider', title: 'Range-slider', type: 'link' },
          { path: '/apps/calendar', title: 'Calendar', type: 'link' },
          { path: '/apps/contacts', title: 'Contacts', type: 'link' },
          { path: '/apps/image-compare', title: 'Image-compare', type: 'link' },
          { path: '/apps/notification', title: 'Notification', type: 'link' },
          { path: '/apps/widget-notification', title: 'Widget-notification', type: 'link' },
          { path: '/apps/treeview', title: 'Treeview', type: 'link' }
        ]
      },
      {
        path: '/icons', title: 'Icons', icon: 'ti-face-smile', type: 'link', active: false
      },
      {
        title: 'Maps', icon: 'ti-map-alt', type: 'sub', badgeType: 'danger', badgeValue: '2', active: false,
        children:[
          { path: '/maps/google', title: 'Google Maps' , type: 'link'},
          { path: '/maps/leaflet', title: 'Leaflet Maps' , type: 'link'}
        ]
      },

      {
        title: 'Tables', icon: ' ti-layout', type: 'sub', active: false,
        children: [
            { path: '/tables/basic-tables', title: 'Basic Tables', type: 'link' },
            { path: '/tables/data-tables', title: 'Data Tables', type: 'link' }
        ]
    },

    // Components
    { headTitle: 'COMPONENTS'},

    {
      title: 'Elements', icon: 'ti-server', type: 'sub', active: false,
      children: [
          { path: '/elements/alerts', title: 'Alerts', type: 'link' },
          { path: '/elements/avatar', title: 'Avatars', type: 'link' },
          { path: '/elements/breadcrumbs', title: 'Breadcrumb', type: 'link' },
          { path: '/elements/buttons', title: 'Buttons', type: 'link' },
          { path: '/elements/badges', title: 'Badges', type: 'link' },
          { path: '/elements/dropdown', title: 'Dropdown', type: 'link' },
          { path: '/elements/thumbnails', title: 'Thumbnails', type: 'link' },
          { path: '/elements/images', title: 'Images', type: 'link' },
          { path: '/elements/list-group', title: 'List Group', type: 'link' },
          { path: '/elements/navigation', title: 'Navigation', type: 'link' },
          { path: '/elements/pagination', title: 'Pagination', type: 'link' },
          { path: '/elements/popover', title: 'Popover', type: 'link' },
          { path: '/elements/progress', title: 'Progress', type: 'link' },
          { path: '/elements/spinner', title: 'Spinner', type: 'link' },
          { path: '/elements/media-object', title: 'Media Object', type: 'link' },
          { path: '/elements/typography', title: 'Typography', type: 'link' },
          { path: '/elements/tooltip', title: 'Tooltip', type: 'link' },
          { path: '/elements/toast', title: 'Toast', type: 'link' },
          { path: '/elements/tags', title: 'Tags', type: 'link' },
          { path: '/elements/tabs', title: 'Tabs', type: 'link' }

      ]
    },

    {
      title: 'Advanced UI', icon: 'ti-palette', type: 'sub', active: false,
      children: [
        { path: '/advancedUi/accordion', title: 'Accordion', type: 'link' },
        { path: '/advancedUi/carousel', title: 'Carousel', type: 'link' },
        { path: '/advancedUi/collapse', title: 'Collapse', type: 'link' },
        { path: '/advancedUi/modals', title: 'Modals', type: 'link' },
        { path: '/advancedUi/timeline', title: 'Timeline', type: 'link' },
        { path: '/advancedUi/sweet-alerts', title: 'Sweet Alerts', type: 'link' },
        { path: '/advancedUi/ratings', title: 'Ratings', type: 'link' },
        { path: '/advancedUi/counters', title: 'Counters', type: 'link' },
        { path: '/advancedUi/search', title: 'Search', type: 'link' },
        { path: '/advancedUi/userlist', title: 'Userlist', type: 'link' },
        { path: '/advancedUi/blog', title: 'Blog', type: 'link' }
    
      ]
    },
    
    //Forms &  Charts
    { headTitle: 'FORMS' },
    {
        title: 'Forms', icon: 'ti-pencil-alt', type: 'sub', badgeType: 'success', badgeValue: '6', active: false,
        children: [
            { path: '/forms/form-elements', title: 'Form Elements', type: 'link' },
            { path: '/forms/advanced-forms', title: 'Advanced Forms', type: 'link' },
            { path: '/forms/form-layouts', title: 'Forms Layouts', type: 'link' },
            { path: '/forms/form-validation', title: 'Forms Validation', type: 'link' },
            { path: '/forms/form-wizards', title: 'Form Wizards', type: 'link' },
            { path: '/forms/form-editor', title: 'Form Editor', type: 'link' }
        ]
    },

    {

      title: 'Charts', icon: 'ti-pie-chart', type: 'sub', badgeType: 'danger', badgeValue: '5', active: false,
        children: [
            { path: '/charts/apex', title: 'Apex Chart', type: 'link' },
            { path: '/charts/chartJs', title: 'Chartjs Chart', type: 'link' },
            { path: '/charts/echart', title: 'Echart Chart', type: 'link' },
            { path: '/charts/chartlist', title: 'Chartlist Chart', type: 'link' }
        ]
    },

    // Other Pages
    { headTitle: 'OTHER PAGES' },
    {
      title: 'Pages', icon: 'ti-files', type: 'sub', active: false,
        children: [
            { path: '/pages/profile', title: 'Profile', type: 'link' },
            { path: '/pages/edit-profile', title: 'Edit Profile', type: 'link' },
            { path: '/pages/invoice', title: 'Invoice', type: 'link' },
            { path: '/pages/pricing', title: 'Pricing', type: 'link' },
            { path: '/pages/gallery', title: 'Gallery', type: 'link' },
            { path: '/pages/todotask', title: 'Todotask', type: 'link' },
            { path: '/pages/faqs', title: 'Faqs', type: 'link' },
            { path: '/pages/empty-page', title: 'Empty Page', type: 'link' },
        ]
    },

    {
      title: 'Ecommerce', icon: 'ti-shopping-cart-full', type: 'sub', badgeType: 'success', badgeValue: '3', active: false,
      children: [
          { path: '/ecommerce/products', title: 'Products', type: 'link' },
          { path: '/ecommerce/product-details', title: 'Product-Details', type: 'link' },
          { path: '/ecommerce/cart', title: 'Cart', type: 'link' }
      ]
    },

    {
      title: 'Utilities', icon: 'ti-layers-alt', type: 'sub', active: false,
      children: [
          { path: '/utilities/background', title: 'Background', type: 'link' },
          { path: '/utilities/border', title: 'Border', type: 'link' },
          { path: '/utilities/display', title: 'Display', type: 'link' },
          { path: '/utilities/flex', title: 'Flex', type: 'link' },
          { path: '/utilities/height', title: 'Height', type: 'link' },
          { path: '/utilities/margin', title: 'Margin', type: 'link' },
          { path: '/utilities/padding', title: 'Padding', type: 'link' },
          { path: '/utilities/position', title: 'Position', type: 'link' },
          { path: '/utilities/width', title: 'Width', type: 'link' },
          { path: '/utilities/extras', title: 'Extras', type: 'link' },

      ]
    },

    {
      title: 'Custom Pages', icon: 'ti-user', type: 'sub', active: false,
      children: [
          { path: '/custompages/sign-in', title: 'Sign In', type: 'link' },
          { path: '/custompages/sign-up', title: 'Sign Up', type: 'link' },
          { path: '/custompages/forget-password', title: 'Forget Password', type: 'link' },  
          { path: '/custompages/reset-password', title: 'Reset Password', type: 'link' },  
          { path: '/custompages/lockscreen', title: 'Lockscreen', type: 'link' },  
          { path: '/custompages/under-construction', title: 'Under Construction', type: 'link' },  
          { path: '/custompages/error-404', title: '404 Error', type: 'link' },  
          { path: '/custompages/error-500', title: '500 Error', type: 'link' },  
      ]
    },
    
    {
      // Sub menu   icon: 'ti-view-grid'
    },
    {
      title: 'Submenus', icon: 'ti-view-grid', type: 'sub', active: false,
      children: [
        {
         title: 'Level 1', type: 'sub', children: [
                    { title: 'Level 1.0', type: 'link' },
                    { title: 'Level 1.1', type: 'link' },
                    {
                      title: 'Level 1.2', type: 'sub',
                      children: [
                        { title: 'Level 1.2.1', type: 'link' },
                        { title: 'Level 1.2.2', type: 'link' },
                        { title: 'Level 1.2.3', type: 'link' },
                      ]
                    },
          ]
        },
        // { title: 'Level 2', type: 'link' },
        // { title: 'Level 3', type: 'link' },
      ]
    }

  ]

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
