import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AddComponent } from 'src/app/components/notifications/add/add.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addserver',
  templateUrl: './addserver.component.html',
  styleUrls: ['./addserver.component.scss']
})
export class AddserverComponent  extends AddComponent  {

  types
  Formates
  createForm() {
    this.GetTypes()
    console.log(this.Inputs)
    console.log(this.AlllistOfData)
    
   
    this.form =  this.fb.group({
      map: [null, Validators.required],
      bingKey: [null, Validators.required],
      mapUrl: [null, Validators.required],
      poiLayer: [null, Validators.required],
      announcement: [null, Validators.required],
      latitude: [null, Validators.required],
      longitude:[null, Validators.required],
      zoom:[null, Validators.required],
      twelveHourFormat:[false, Validators.required],
      forceSettings:[false, Validators.required],
      coordinateFormat:[null, Validators.required],
      registration:[null],
      readonly:[null],
      deviceReadonly:[null],
      limitCommands:[null],
    })

    console.log(this.form)
  } 
  
  async edit() {
    if (this.form.valid) {
      this.isAdd = true;
      const data = await this.service.PUT(this.classname,this.form.getRawValue(), this.id);
      this.isAdd = false;
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Data Updated Successfully!',
        confirmButtonColor: '#0162e8'
      })
        }
  } 

  async GetTypes(){
    const data = await this.service.GetNotifications(this.classname+"/maplayers");
    this.types = data



    const formate = await this.service.GetNotifications(this.classname+"/coordinates");
    this.Formates = formate
    this.isAdd = false;
  }
}
