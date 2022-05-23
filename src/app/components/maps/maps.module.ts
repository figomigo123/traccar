import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleComponent } from './google/google.component';
import { LeafletComponent } from './leaflet/leaflet.component';
import { MapsRoutingModule } from './maps-routing.module';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  declarations: [GoogleComponent, LeafletComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDuNl3N7Az7hs3lQdJ6mZkZIsJIVgvDI7g'
    }),
    LeafletModule,
    
  ]
})
export class MapsModule { }
