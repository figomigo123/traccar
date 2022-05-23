import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { differenceInCalendarDays } from 'date-fns';
import { DisabledTimeFn, DisabledTimePartial } from 'ng-zorro-antd/date-picker';
import { NotificationsComponent } from 'src/app/components/notifications/notifications/notifications.component';

@Component({
  selector: 'app-addstatistics',
  templateUrl: './addstatistics.component.html',
  styleUrls: ['./addstatistics.component.scss']
})
export class AddstatisticsComponent extends NotificationsComponent {
  form: FormGroup;
  timeDefaultValue = new Date()
  today = new Date();

  async ngOnInit(): Promise<void>  {

    this.createForm();
    // this.country = localStorage.getItem("country")
    // if (this.country) {
    //   const country = JSON.parse(this.country);
    //   this.id = country.id;
    //   this.form.reset(country);
    // }     
  }

  async add() {
    const data = await this.service.GetNotifications(this.classname+"/view?from="+this.generic.formatDate(this.form.value.from)+"&to="+this.generic.formatDate(this.form.value.to)+"")

    this.listOfData  =  data
    this.AlllistOfData  =  data
    this.listOfColumns  = this.listOfData.length > 0 ? Object.keys(this.listOfData[0]) : Object.keys(this.listOfData)
    this.AlllistOfColumns  = this.AlllistOfData.length > 0 ? Object.keys(this.AlllistOfData[0]) : Object.keys(this.AlllistOfData)
   
  } 
  createForm() {
    this.form =  this.fb.group({
      from: [null, Validators.required],
      to: [null, Validators.required],
    })
    console.log(this.form)
  } 
  range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }  
  disabledDate = (current: Date): boolean =>
  // Can not select days before today and today
  differenceInCalendarDays(current, this.today) > 0;

disabledDateTime: DisabledTimeFn = () => ({
  nzDisabledHours: () => this.range(0, 24).splice(4, 20),
  nzDisabledMinutes: () => this.range(30, 60),
  nzDisabledSeconds: () => [55, 56]
}); 

disabledRangeTime: DisabledTimeFn = (_value, type?: DisabledTimePartial) => {
  if (type === 'start') {
    return {
      nzDisabledHours: () => this.range(0, 60).splice(4, 20),
      nzDisabledMinutes: () => this.range(30, 60),
      nzDisabledSeconds: () => [55, 56]
    };
  }
  return {
    nzDisabledHours: () => this.range(0, 60).splice(20, 4),
    nzDisabledMinutes: () => this.range(0, 31),
    nzDisabledSeconds: () => [55, 56]
  };
}


}