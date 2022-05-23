import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { DraggablecardsComponent } from './draggablecards/draggablecards.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ImageCompareComponent } from './image-compare/image-compare.component';
import { NotificationComponent } from './notification/notification.component';
import { WidgetNotificationComponent } from './widget-notification/widget-notification.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { AppsRoutingModule } from './apps-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DragulaModule } from 'ng2-dragula';
import { TreeviewModule } from 'ngx-treeview';
import { ComparisonModule } from './image-compare/image-comparsion-hori/image-comparsion-hori.module';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


//Custom angular notifier options
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 15
    },
    vertical: {
      position: 'top',
      distance: 15,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
const customNotifierOptions1: NotifierOptions = {
  position: {
    horizontal: {
      position: 'left',
      distance: 15
    },
    vertical: {
      position: 'top',
      distance: 15,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [CardsComponent, DraggablecardsComponent, RangeSliderComponent, CalendarComponent, ContactsComponent, ImageCompareComponent, NotificationComponent, WidgetNotificationComponent, TreeviewComponent],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    NgxSliderModule,
    DragulaModule.forRoot(),
    NotifierModule.withConfig(customNotifierOptions),
    // NotifierModule.withConfig(customNotifierOptions1),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    TreeviewModule.forRoot(),
    ComparisonModule,
    MatTreeModule, MatIconModule, MatProgressBarModule
    
  ]
})
export class AppsModule { }
