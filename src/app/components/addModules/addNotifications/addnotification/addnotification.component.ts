import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { extent } from 'd3-array';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { AddComponent } from 'src/app/components/notifications/add/add.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addnotification',
  templateUrl: './addnotification.component.html',
  styleUrls: ['./addnotification.component.scss']
})
export class AddnotificationComponent  extends AddComponent  {
types 
listOfOption = ['Option 01', 'Option 02'];
listOfSelectedValues ;
alarmsValues ;

alarmsData;;
listOfOptions 
notificator 
size: NzSelectSizeType = 'default';
alarm = false;
ngOnInit() {
  this.createForm();
  this.GetTypes()
  this.GetNotificators()
  this.country = localStorage.getItem("item")
  if (this.country) {
    this.country = JSON.parse(this.country);
    this.id = this.country.id;
    console.log(this.country )

    this.country.notificators = this.country.notificators.split(",")
    if (this.country.type == "alarm"){
      this.alarm = true 

      this.country.attributes = this.country.attributes.alarms.split(",")
                                              }
                                              console.log(this.country)

    this.form.reset(this.country);
    this.listOfSelectedValues = this.country.notificators
    this.alarmsValues = this.country.attributes

  }  

}


  createForm() {

    this.Getalarams()
    this.form =  this.fb.group({
      type: [null, Validators.required],
      always: [false],
      notificators: [null, Validators.required],
      attributes: [null],
      id: [this.id ?? -1],


    })


  } 
  SelectData(e){
    this.notificator =  e.toString()
  }

  async add() {
    console.log(this.alarmsValues)
    this.form.get('notificators').setValue(this.listOfSelectedValues.toString())
    this.form.get('attributes').setValue(this.alarmsValues ? {alarms:  this.alarmsValues.toString() } : {})
    
    console.log(this.form.getRawValue())
    if (this.form.valid) {
      this.isAdd = true;
      const data = await this.service.add(this.classname,this.form.getRawValue());
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Well Done!',
      //   text: 'Data Updated Successfully!',
      //   confirmButtonColor: '#0162e8'
      // })
      this.isAdd = false;
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Data Updated Successfully!',
        confirmButtonColor: '#0162e8'
      })
      this.NZmodalService.closeAll()

      this.form.reset();
    }
  } 
  typesSelect($event){
console.log($event)

if ($event == "alarm"){
  this.alarm = true
}else {
  this.alarm = false

}
  }
  async edit() {
    this.form.get('notificators').setValue(this.listOfSelectedValues.toString())
    this.form.get('attributes').setValue(this.alarmsValues ? {alarms:  this.alarmsValues.toString() } : {})

    if (this.form.valid) {
      this.isAdd = true;
      const data = await this.service.edit(this.classname,this.form.getRawValue(), this.id);
      this.isAdd = false;
      this.NZmodalService.closeAll()

      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Data Updated Successfully!',
        confirmButtonColor: '#0162e8'
      })
        }
  } 
  async GetTypes(){
    const data = await this.service.GetNotificationsTypes();
    this.types = data
    this.isAdd = false;
  }

  async Getalarams(){
    const data = await this.service.GetNotifications(this.classname+"/alarms");
    this.alarmsData = data
    console.log(this.alarmsData)
    this.isAdd = false;
  }
  async GetNotificators(){
    const data = await this.service.GetNotifications(this.classname+"/notificators");
    this.listOfOptions = data
    console.log(this.alarmsData)
    this.isAdd = false;
  }
}
