import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';

import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { FullscreenDirective } from './directives/fullscreen-toggle.directive';
import { SearchDatePipe } from './pipes/search-date.pipe';
import { HoriFullLayoutComponent } from './layouts-horizontal/hori-full-layout/hori-full-layout.component';
import { HoriHeaderComponent } from './components-horizontal/hori-header/hori-header.component';
import { HorizontalMenuComponent } from './components-horizontal/horizontal-menu/horizontal-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotificationSidebarComponent } from './components/notification-sidebar/notification-sidebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  declarations: [ 
    FooterComponent, HeaderComponent, LoaderComponent,
     TapToTopComponent, SidebarComponent, NotificationSidebarComponent,
      FullLayoutComponent, ContentLayoutComponent, FullscreenDirective,
      SearchDatePipe,
      HoriFullLayoutComponent, HoriHeaderComponent, HorizontalMenuComponent  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgSelectModule,
    HighlightModule,
    PerfectScrollbarModule
  ],
  providers: [ 
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  exports: [
    LoaderComponent, FooterComponent, HeaderComponent,NgbModule,
    TapToTopComponent, SidebarComponent, NotificationSidebarComponent,PerfectScrollbarModule,
    FullLayoutComponent, ContentLayoutComponent, FullscreenDirective,
    SearchDatePipe, HoriFullLayoutComponent, HoriHeaderComponent, HorizontalMenuComponent
  ],
})
export class SharedModule { }
