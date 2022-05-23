import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LeafletComponent } from 'src/app/components/maps/leaflet/leaflet.component';
import { AddComponent } from 'src/app/components/notifications/add/add.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addgoefences',
  templateUrl: './addgoefences.component.html',
  styleUrls: ['./addgoefences.component.scss']
})
export class AddgoefencesComponent extends AddComponent {

  createForm() {
    console.log(this.Inputs)
    console.log(this.AllInputsInputs)

   var   Typefilter = Array()
  // var FilterType = this.Inputs.map(data => Typefilter[data] = [null, Validators.required])
  //  console.log(JSON.stringify(Typefilter))
  Typefilter["name"] =  [null, Validators.required]
  Typefilter["description"] =  [null]


  Typefilter["id"] = this.id == "" ? -1 : this.id 
  Typefilter["area"] = "as"

    this.form =  this.fb.group(Typefilter)
  } 
  openNotitifacationsModal() {
    const modalRef = this.NZmodalService.create({
      nzTitle: "Add  "+this.classname,
      nzContent: LeafletComponent,
      nzWidth:"1000px",
      
      
      nzFooter: [
        {
          label: 'Close',
          shape: 'round',
          onClick: () => modalRef.destroy()
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: () => modalRef.confirm({ nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content' })
        }
      ]
    });
  

  }

  async add() {
    this.form.get('area').setValue(localStorage.getItem("area"))

    console.log(this.form.getRawValue())
    if (this.form.valid) {
      this.isAdd = true;
      const data = await this.service.add(this.classname,this.form.getRawValue());
 
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
