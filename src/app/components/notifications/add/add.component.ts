import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GenericService } from 'src/app/services/generic/generic.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  @Input("Inputs") Inputs:string[] = [];
  @Input("AllInputs") AllInputsInputs:string[] = [];
  @Input("classname") classname:string;
  @Input("AlllistOfData") AlllistOfData:any;

  form: FormGroup;
  countries: any[] = [];
  data: any = [];

  country: any = null;
  id = "";
  isAdd: boolean = false
  imageName = 'اختر الصورة';
  image: any = '';
  obj: any = null;
  constructor(
    public fb: FormBuilder, 
    public generic: GenericService,
    public service: NotificationsService,
    public NZmodalService: NzModalService,
    public cdr: ChangeDetectorRef,
    public authService: AuthService,
    public router: ActivatedRoute) { }
check(column){
  console.log(column)
  console.log(this.Inputs)

  return this.Inputs.includes(column)
  
}
  ngOnInit() {
    this.createForm();
    this.country = localStorage.getItem("item")
    if (this.country) {
      const country = JSON.parse(this.country);
      this.id = country.id;
      this.form.reset(country);
      console.log(country)
    }  
       
  }

  createForm() {
    console.log(this.Inputs)

   var   Typefilter = Array()
   var FilterType = this.Inputs.map(data => Typefilter[data] = [null, Validators.required])
  //  console.log(JSON.stringify(Typefilter))
    this.form =  this.fb.group(Typefilter)
  } 


  async add() {
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
  
  async edit() {
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
  ngOnDestroy() {
    localStorage.removeItem("item")
  }
}
