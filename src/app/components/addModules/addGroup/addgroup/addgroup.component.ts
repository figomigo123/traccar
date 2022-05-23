import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AddComponent } from 'src/app/components/notifications/add/add.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.scss']
})
export class AddgroupComponent extends AddComponent {
  groups: any[] = [];

  createForm() {
    console.log(this.Inputs)
    console.log(this.AlllistOfData)
    
   
    this.form =  this.fb.group({
      name: [null, Validators.required],
      groupId: [null],
      id: [this.id ?? -1],

    })

    console.log(this.form)
  } 

  async add() {
    console.log(this.form.getRawValue())
    if (this.form.valid) {
      this.isAdd = true;
      const data = await this.service.add(this.classname,this.form.getRawValue());
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Data Updated Successfully!',
        confirmButtonColor: '#0162e8'
      })
      this.NZmodalService.closeAll()

      this.isAdd = false;
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Data Updated Successfully!',
        confirmButtonColor: '#0162e8'
      })
      this.form.reset();
    }
  }

}
