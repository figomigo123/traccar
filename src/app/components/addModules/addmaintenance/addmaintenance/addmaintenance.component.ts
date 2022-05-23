import { Component, OnInit } from '@angular/core';
import { AddComponent } from 'src/app/components/notifications/add/add.component';

@Component({
  selector: 'app-addmaintenance',
  templateUrl: './addmaintenance.component.html',
  styleUrls: ['./addmaintenance.component.scss']
})
export class AddmaintenanceComponent extends AddComponent  {
  
  types
ngOnInit(){
  super.ngOnInit()
  this.GetTypes()
}
  async GetTypes(){
    const data = await this.service.GetNotifications(this.classname+"/types");
    this.types = data
    this.isAdd = false;
  }
}
