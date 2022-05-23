import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AddComponent } from 'src/app/components/notifications/add/add.component';

@Component({
  selector: 'app-addcommands',
  templateUrl: './addcommands.component.html',
  styleUrls: ['./addcommands.component.scss']
})
export class AddcommandsComponent extends AddComponent  {
  types 
  createForm() {

    this.GetTypes()
    this.form =  this.fb.group({
      description: [null, Validators.required],
      textChannel: [false],
      type: [null, Validators.required],
      id: [this.id ?? -1],

    })

    console.log(this.form)
  } 
  async GetTypes(){
    const data = await this.service.GetNotifications(this.classname+"/types");
    this.types = data
    this.isAdd = false;
  }
}
