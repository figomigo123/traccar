import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { GenericService } from 'src/app/services/generic/generic.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import Swal from 'sweetalert2';
import { AddAttributesComponent } from '../../addModules/addAttributes/add-attributes/add-attributes.component';
import { AddcalendarsComponent } from '../../addModules/addcalendars/addcalendars/addcalendars.component';
import { AddcommandsComponent } from '../../addModules/addcommands/addcommands/addcommands.component';
import { AdddriverComponent } from '../../addModules/addDriver/adddriver/adddriver.component';
import { AddgoefencesComponent } from '../../addModules/addGoefences/addgoefences/addgoefences.component';
import { AddgroupComponent } from '../../addModules/addGroup/addgroup/addgroup.component';
import { AddmaintenanceComponent } from '../../addModules/addmaintenance/addmaintenance/addmaintenance.component';
import { AddnotificationComponent } from '../../addModules/addNotifications/addnotification/addnotification.component';
import { AddserverComponent } from '../../addModules/addServer/addserver/addserver.component';
import { AddstatisticsComponent } from '../../addModules/addstatistics/addstatistics/addstatistics.component';
import { NewUserComponent } from '../../dashboard/dashboard/new-user/new-user.component';
import { UserComponent } from '../../dashboard/dashboard/user/user.component';
import { AddComponent } from '../add/add.component';
import { ColumnItem, FilterTypes, NotificationModel } from '../model/NotificationModel';

@Component({
  selector: 'app-notifications',
  templateUrl: './Permmissions.component.html',
  styleUrls: ['./Permmissions.component.scss']
})
export class PermmissionsComponent implements OnInit {
  @Input("Permissionsclassname") Permissionsclassname:string;
  @Input("classId") classId:number;

  @Input("classname") classname:string;
  @Input("isVisible") isVisible:string;
  @Input("classIndex") classIndex:string;
  setOfCheckedId = new Set<number>();

  isOkLoading = false
  pageIndex = 1
  PermissionData
  listOfColumns: string[] = [
 
  ];
  AlllistOfColumns: string[] = [
 
  ];
  listOfData: NotificationModel[] = [
   
  ];
  AlllistOfData: NotificationModel[] = [
   
  ];
  ListOFComponents =  [UserComponent,AddgroupComponent,
    AdddriverComponent,AddgoefencesComponent,AddserverComponent,NewUserComponent,AddnotificationComponent,
   ,AddcalendarsComponent,AddcommandsComponent,AddmaintenanceComponent];
  constructor(public service:NotificationsService,
    public generic: GenericService, 
    public router: Router,
    public NZmodalService: NzModalService,
    public fb: FormBuilder, 

    ) { 
  }
checkString(Feild){
if (typeof  Feild === 'object'){
return JSON.stringify(Feild)
}else {
  return Feild
}
}
onItemChecked(id: number, checked: boolean): void {
  var fordata  = {};
  var last = this.Permissionsclassname.charAt(this.Permissionsclassname.length - 1);
if (last == "s") {
  last =   this.Permissionsclassname.slice(0, -1)
}else {
  last = this.Permissionsclassname

}
 fordata[this.classname.slice(0, -1)+'Id'] = this.classId.toString()
 fordata[last+'Id'] = id.toString()
console.log(this.classname.slice(0, -1)+'Id')
console.log(fordata)
if (checked == true) {
this.service.AddPermissions(fordata)
}else {
  this.service.DeletePermissions(fordata)

}

}
pageChange(index){
  console.log(index)
  this.pageIndex = index
}
  async ngOnInit(): Promise<void> {
    console.log(this.classname)

 

    const reports =  await Promise.all([this.service.GetNotificationsTypes(),this.service.GetNotifications(this.Permissionsclassname),this.service.GetNotificationsForIndex(this.Permissionsclassname),this.service.GetUserPermissions(this.Permissionsclassname,this.classname.slice(0, -1)+'Id='+this.classId)])
  var   Typefilter = Array()

  this.PermissionData = reports[3]
  //var FilterType = reports[0].map(data => Typefilter.push({ "text":data.type, "value":data.type}))
 this.listOfData  =  reports[2]
 this.AlllistOfData  =  reports[1]
 this.listOfColumns  = this.listOfData.length > 0 ? Object.keys(this.listOfData[0]) : Object.keys(this.listOfData)
 const index = this.listOfColumns.indexOf("id", 0);

 this.listOfColumns.splice(index, 1);

 console.log(this.listOfColumns)
 this.AlllistOfColumns  = this.AlllistOfData.length > 0 ? Object.keys(this.AlllistOfData[0]) : Object.keys(this.AlllistOfData)

    console.log(this.listOfColumns)

  }
  openNotitifacationsModal() {
    const modalRef = this.NZmodalService.create({
      nzTitle: "Add  "+this.classname,
      nzContent: this.ListOFComponents[this.classIndex],
      nzWidth:"500px"
    });
    modalRef.componentInstance["Inputs"]  = this.listOfColumns 
    modalRef.componentInstance["AllInputsInputs"] = this.AlllistOfColumns
    modalRef.componentInstance["classname"] = this.classname;
    modalRef.componentInstance["AlllistOfData"] = this.AlllistOfData

  }
  edit(country) {
    console.log(country)
   const filter = this.AlllistOfData.filter(data=> data.id == country.id)
    const obj = JSON.stringify(filter[0]);
    console.log(filter)

    localStorage.setItem('item', obj)
    const modalRef = this.NZmodalService.create({
      nzTitle: "Edit  "+this.classname,
      nzContent: this.ListOFComponents[this.classIndex],
      nzWidth:"500px"
    });
    modalRef.componentInstance["Inputs"]  = this.listOfColumns 
    modalRef.componentInstance["AllInputsInputs"] = this.AlllistOfColumns
    modalRef.componentInstance["classname"] = this.classname;
    modalRef.componentInstance["AlllistOfData"] = this.AlllistOfData
  }  
  add() {
    const obj = JSON.stringify(this.listOfColumns);
    localStorage.setItem('item', obj)
    this.router.navigate([`items/edit`])
  }  
  async delete(id, index) {
   // this.loading = true;
    const data = this.service.Delete(this.classname,id.id);
    this.listOfData.splice(index, 1);
    // this.loading = false;
    this.NZmodalService.closeAll()

    Swal.fire({
      title: 'Deleted!',
      text: 'Device Deleted Successfully.',
      icon: 'success',
      confirmButtonColor: '#0162e8'
    })
  } 
}
