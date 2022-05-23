import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { CardsComponent } from "./cards/cards.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { DraggablecardsComponent } from "./draggablecards/draggablecards.component";
import { ImageCompareComponent } from "./image-compare/image-compare.component";
import { NotificationComponent } from "./notification/notification.component";
import { RangeSliderComponent } from "./range-slider/range-slider.component";
import { TreeviewComponent } from "./treeview/treeview.component";
import { WidgetNotificationComponent } from "./widget-notification/widget-notification.component";

const routes:Routes = [
    {path:'',
        children: [
            {
                path: 'calendar', component: CalendarComponent
            },
            {
                path: 'cards', component: CardsComponent
            },
            {
                path: 'contacts', component: ContactsComponent
            },
            {
                path: 'draggablecards', component: DraggablecardsComponent
            },
            {
                path: 'image-compare', component: ImageCompareComponent
            },
            {
                path: 'notification', component: NotificationComponent
            },
            {
                path: 'range-slider', component: RangeSliderComponent
            },
            {
                path: 'treeview', component: TreeviewComponent
            },
            {
                path: 'widget-notification', component: WidgetNotificationComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class  AppsRoutingModule { }

