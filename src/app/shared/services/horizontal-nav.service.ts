import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//MenuBar
export interface HorizontalMenu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: HorizontalMenu[];
}

@Injectable({
  providedIn: 'root'
})
export class HorizontalNavService {

  constructor() { }


  MENUITEMS: HorizontalMenu[] = [
    {
      path: '/dashboard', title: 'Map', type: 'link', icon: 'ti-map', active: false
    },
    // {
    //   path: '/widgets', title: 'Widgets', type: 'link', icon: 'ti-briefcase', active: false
    // },
    // {
    //   title: 'Charts', icon: 'ti-bar-chart-alt', type: 'sub',  badgeType: 'danger', badgeValue: '5',active: false,
    //   children: [
    //     { path: '/charts/apex', title: 'Apex', type: 'link' },
    //     { path: '/charts/chartJs', title: 'Chart.js', type: 'link' },
    //     { path: '/charts/echart', title: 'Echart', type: 'link' },
    //     { path: '/charts/chartlist', title: 'Chartlist', type: 'link' },
    //   ]
    // },
    // {
    //   title: 'Elements', icon: 'ti-layers', type: 'sub', active: false,
    //   children: [
    //    { path: '/elements/alerts', title: 'Alerts', type: 'link' },
    //    { path: '/elements/avatar', title: 'Avatars', type: 'link' },
    //    { path: '/elements/breadcrumbs', title: 'Breadcrumb', type: 'link' },
    //    { path: '/elements/buttons', title: 'Buttons', type: 'link' },
    //    { path: '/elements/badges', title: 'Badge', type: 'link' },
    //    { path: '/elements/dropdown', title: 'Dropdown', type: 'link' },
    //    { path: '/elements/thumbnails', title: 'Thumbnails', type: 'link' },
    //    { path: '/elements/images', title: 'Images', type: 'link' },
    //    { path: '/elements/list-group', title: 'List Group', type: 'link' },
    //    { path: '/elements/navigation', title: 'Navigation', type: 'link' },
    //    { path: '/elements/pagination', title: 'Pagination', type: 'link' },
    //    { path: '/elements/popover', title: 'Popover', type: 'link' },
    //    { path: '/elements/progress', title: 'Progress', type: 'link' },
    //    { path: '/elements/spinner', title: 'Spinners', type: 'link' },
    //    { path: '/elements/media-object', title: 'Media Object', type: 'link' },
    //    { path: '/elements/typography', title: 'Typhography', type: 'link' },
    //    { path: '/elements/tooltip', title: 'Tooltips', type: 'link' },
    //    { path: '/elements/toast', title: 'Toast', type: 'link' },
    //    { path: '/elements/tags', title: 'Tags', type: 'link' },
    //    { path: '/elements/tabs', title: 'Tabs', type: 'link' },
         
        
    //   ]
    // },
    // {
    //   title: 'APPS', icon: 'ti-write', type: 'sub', active: false,
    //   children: [
    //     { path: '/apps/cards', title: 'Cards', type: 'link' },
    //     { path: '/apps/draggablecards', title: 'Draggablecards', type: 'link' },
    //     { path: '/apps/range-slider', title: 'Range - slider', type: 'link' },
    //     { path: '/apps/calendar', title: 'Calendar', type: 'link' },
    //     { path: '/apps/contacts', title: 'Contacts', type: 'link' },
    //     { path: '/apps/image-compare', title: 'Image - Compare', type: 'link' },
    //     { path: '/apps/notification', title: 'Notification', type: 'link' },
    //     { path: '/apps/widget-notification', title: 'Widget - Notification', type: 'link' },
    //     { path: '/apps/treeview', title: 'Treeview', type: 'link' },
    //     {
    //        path: '/icons', title: 'Icons', type: 'link' , icon: 'ti-face-smile', active: false,
    //     },
    //     {
    //       title: 'MAPS', type: 'sub', active: false,
    //       children: [
    //         { path: '/maps/leaflet', title: 'Leaflet Maps', type: 'link' },
    //         { path: '/maps/google', title: 'Google Maps', type: 'link' },
    //       ]
    //     },
    //     {
    //       title: 'TABLES', type: 'sub', active: false,
    //       children: [
    //         { path: '/tables/basic-tables', title: 'Basic Tables', type: 'link' },
    //         { path: '/tables/data-tables', title: 'Data Tables', type: 'link' },
    //       ]
    //     },
    //   ]
    // },
    // {
    //   title: 'Advanced UI',icon: 'ti-write', type: 'sub', active: false,
    //   children: [
    //     { path: '/advancedUi/accordion', title: 'Accordion', type: 'link' },
    //     { path: '/advancedUi/carousel', title: 'Carousel', type: 'link' },
    //     { path: '/advancedUi/collapse', title: 'Collapse', type: 'link' },
    //     { path: '/advancedUi/modals', title: 'Modals', type: 'link' },
    //     { path: '/advancedUi/timeline', title: 'Timeline', type: 'link' },
    //     { path: '/advancedUi/sweet-alerts', title: 'Sweet Alerts', type: 'link' },
    //     { path: '/advancedUi/ratings', title: 'Ratings', type: 'link' },
    //     { path: '/advancedUi/counters', title: 'Counter', type: 'link' },
    //     { path: '/advancedUi/search', title: 'Search', type: 'link' },
    //     { path: '/advancedUi/userlist', title: 'Userlist', type: 'link' },
    //     { path: '/advancedUi/blog', title: 'Blog', type: 'link' },
    //   ]
    // },
    // {
    //   title: 'Utilities', icon: 'ti-agenda', type: 'sub', active: false,
    //   children: [
    //     { path: '/utilities/background', title: 'Background', type: 'link' },
    //     { path: '/utilities/border', title: 'Border', type: 'link' },
    //     { path: '/utilities/display', title: 'Display', type: 'link' },
    //     { path: '/utilities/flex', title: 'Flex', type: 'link' },
    //     { path: '/utilities/height', title: 'Height', type: 'link' },
    //     { path: '/utilities/margin', title: 'Margin', type: 'link' },
    //     { path: '/utilities/padding', title: 'Padding', type: 'link' },
    //     { path: '/utilities/position', title: 'Position', type: 'link' },
    //     { path: '/utilities/width', title: 'Width', type: 'link' },
    //     { path: '/utilities/extras', title: 'Extras', type: 'link' },
    //   ]
    // },
    // {
    //   title: 'Pages', icon: 'ti-receipt', type: 'sub', active: false,
    //   children: [
    //     { path: '/pages/profile', title: 'Profile', type: 'link' },
    //     { path: '/pages/edit-profile', title: 'Edit - Profile', type: 'link' },
    //     { path: '/pages/invoice', title: 'Invoice', type: 'link' },
    //     { path: '/pages/pricing', title: 'Pricing', type: 'link' },
    //     { path: '/pages/gallery', title: 'Gallery', type: 'link' },
    //     { path: '/pages/faqs', title: 'Faqs', type: 'link' },
    //     { path: '/pages/empty-page', title: 'Empty Page', type: 'link' },
    //     { path: '/pages/todotask', title: 'TodoTask', type: 'link' },
    //     {
    //       title: 'Mail', icon: 'ti-write', type: 'sub', active: false,
    //       children: [
    //         { path: '/mail/mail', title: 'Mail - Inbox', type: 'link' },
    //         { path: '/mail/mail-compose', title: 'Mail - Compose', type: 'link' },
    //         { path: '/mail/read-mail', title: 'Mail - Read', type: 'link' },
    //         { path: '/mail/mail-settings', title: 'Mail - Settings', type: 'link' },
    //         { path: '/mail/chat', title: 'Chat', type: 'link' },
    //       ]
    //     },
    //     {
    //       title: 'E-Commerce', icon: 'ti-shopping-cart', type: 'sub', badgeType: 'warning', badgeValue: '3', active: false,
    //       children: [
    //         { path: '/ecommerce/products', title: 'Products', type: 'link' },
    //         { path: '/ecommerce/product-details', title: 'Products Details', type: 'link' },
    //         { path: '/ecommerce/cart', title: 'Shopping Cart', type: 'link' },
    //       ]
    //     },        
    //     {
    //       title: 'Submenus', type: 'sub', active: false,
    //       children: [
    //         {
    //           title: 'Level 1', type: 'sub',
    //           children: [
    //             { title: 'Level 1.0', type: 'link' },
    //             { title: 'Level 1.1', type: 'link' },
    //             { title: 'Level 1.2', type: 'link' },
    //           ]
    //         },
    //         // { title: 'Level 2', type: 'link' },
    //         // { title: 'Level 3', type: 'link' }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   title: 'Forms', icon: 'ti-receipt', type: 'sub', active: false,
    //   children: [
    //     { path: '/forms/form-elements', title: 'Form Elements', type: 'link' },
    //     { path: '/forms/advanced-forms', title: 'Advanced Forms', type: 'link' },
    //     { path: '/forms/form-layouts', title: 'Form Layouts', type: 'link' },
    //     { path: '/forms/form-validation', title: 'Form Validation', type: 'link' },
    //     { path: '/forms/form-wizards', title: 'Form Wizards', type: 'link' },
    //     { path: '/forms/form-editor', title: 'Form Editors', type: 'link' },
    //   ]
    // },
    // {
    //   title: 'Custom', icon: 'ti-id-badge', type: 'sub', active: false,
    //   children: [
    //     { path: '/custompages/sign-in', title: 'Sign In', type: 'link' },
    //     { path: '/custompages/sign-up', title: 'Sign Up', type: 'link' },
    //     { path: '/custompages/forget-password', title: 'Forgot Password', type: 'link' },
    //     { path: '/custompages/reset-password', title: 'Reset Password', type: 'link' },
    //     { path: '/custompages/lockscreen', title: 'Lock Screen', type: 'link' },
    //     { path: '/custompages/under-construction', title: 'Under Construction', type: 'link' },
    //     { path: '/custompages/error-404', title: '404 Error', type: 'link' },
    //     { path: '/custompages/error-500', title: '500 Error', type: 'link' },
    //   ]
    // },
  ];

  //array
  items = new BehaviorSubject<HorizontalMenu[]>(this.MENUITEMS);


}
