import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ImagesComponent } from './images/images.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { TypographyComponent } from './typography/typography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TagsComponent } from './tags/tags.component';
import { TabsComponent } from './tabs/tabs.component';
import { ElementRoutingModule } from './elements-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ToastComponent } from './toast/toast.component';
import { ToastContainerComponent } from './toast/toast-container/toast-container/toast-container.component';
import {  HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [AlertsComponent, AvatarComponent, BreadcrumbsComponent, ButtonsComponent, BadgeComponent, DropdownComponent, ThumbnailsComponent, ImagesComponent, ListGroupComponent, NavigationComponent, PaginationComponent, PopoverComponent, ProgressComponent, SpinnersComponent, MediaObjectComponent, TypographyComponent, TooltipComponent, ToastComponent, TagsComponent, TabsComponent, ToastContainerComponent ],
  imports: [
    CommonModule, ElementRoutingModule,
    NgbModule, FormsModule , ReactiveFormsModule  , NgSelectModule, AngularMultiSelectModule,
    HighlightModule,
    ClipboardModule,
  ],
  providers: [ 
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ]
})
export class ElementsModule { }
