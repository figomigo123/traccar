import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { AddComponent } from 'src/app/components/notifications/add/add.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcalendars',
  templateUrl: './addcalendars.component.html',
  styleUrls: ['./addcalendars.component.scss']
})
export class AddcalendarsComponent extends AddComponent  {


  ImageBase64 ;

   getBase64(event) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      me.ImageBase64 =   reader.result.toString().split(',')[1];
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
  createForm() {
    console.log(this.Inputs)
    console.log(this.AlllistOfData)
    
   
    this.form =  this.fb.group({
      name: [null, Validators.required],
      data: [null],
      id: [this.id ?? -1],

    })

    console.log(this.form)
  } 

  async add() {
    this.form.get("data").setValue(this.ImageBase64) 
    const formData: any = new FormData();
      // formData.append("name", (this.form.value.name));
      // formData.append("date", this.ImageBase64);
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
}
