import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { extent } from 'd3-array';
import { AddComponent } from 'src/app/components/notifications/add/add.component';

@Component({
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.scss']
})
export class AdddriverComponent extends AddComponent  {

  data ;


  createForm() {
    console.log(this.Inputs)
    console.log(this.AlllistOfData)
    
   
    this.form =  this.fb.group({
      name: [null, Validators.required],
      uniqueId: [null, Validators.required],
      id: [this.id ?? -1],

    })

    console.log(this.form)
  } 

 
}
