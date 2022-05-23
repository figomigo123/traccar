import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddComponent } from 'src/app/components/notifications/add/add.component';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent  extends AddComponent  {


  user: User;

  name;
  email;
  password;
  phone;
  latitude;
  longitude;
  zoom;
  hourFormat12;
  coordinatesFormat;
  mapLayer;
  poiLayer;
  disabled;
  admin;
  readonly;
  deviceReadonly;
  limitCommands;
  expiration;
  deviceLimit;
  userLimit;
  token;

  ngOnInit(): void {
    this.country = localStorage.getItem("item")
    if (this.country) {
      const country = JSON.parse(this.country);
      this.id = country.id;
      console.log(country)
    }  
    this.getUserDate()

  }

  getUserDate(){
    console.log(this.id)
    this.authService.getuser(this.id).subscribe((res:User)=>{
      this.user = res;
      this.name = res['name'];
      this.email = res['email'];
      this.password = res['password'];
      this.phone = res['phone'];
      this.latitude = res['latitude'];
      this.longitude = res['longitude'];
      this.zoom = res['zoom'];
      this.hourFormat12 = res['twelveHourFormat'];
      this.coordinatesFormat = res['coordinateFormat'];
      this.mapLayer = res['map'];
      this.poiLayer = res['poiLayer'];
      this.disabled = res['disabled'];
      this.admin = res['administrator'];
      this.readonly = res['readonly'];
      this.deviceReadonly = res['deviceReadonly'];
      this.limitCommands = res['limitCommands'];
      this.expiration = res['expirationTime'];
      this.deviceLimit = res['deviceLimit'];
      this.userLimit = res['userLimit'];
      this.token = res['token'];
    })
  }

  save(){
    this.NZmodalService.closeAll()

    let info = {
      id: 0,
      name: this.name,
      email: this.email,
      phone: this.phone,
      readonly: this.readonly,
      administrator: this.admin,
      map: this.mapLayer,
      latitude: this.latitude,
      longitude: this.longitude,
      zoom: this.zoom,
      password: this.password,
      twelveHourFormat: this.hourFormat12,
      coordinateFormat: this.coordinatesFormat,
      disabled: this.disabled,
      expirationTime: this.expiration,
      deviceLimit: this.deviceLimit,
      userLimit: this.userLimit,
      deviceReadonly: this.deviceReadonly,
      limitCommands: this.limitCommands,
      poiLayer: this.poiLayer,
      token: this.token,
      attributes: {}
    }
    this.authService.addUser("/users", info).subscribe((res)=>{
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Data Updated Successfully!',
        confirmButtonColor: '#0162e8'
      })
    })
  }

  generateToken(){
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let i, newToken = '';

    for (i = 0; i < 32; i++) {
        newToken += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    this.token = newToken;
  }
  async edit(){

    this.NZmodalService.closeAll()

    let info = {
      id: this.user['id'],
      name: this.name,
      email: this.email,
      phone: this.phone,
      readonly: this.readonly,
      administrator: this.admin,
      map: this.mapLayer,
      latitude: this.latitude,
      longitude: this.longitude,
      zoom: this.zoom,
      password: this.password,
      twelveHourFormat: this.hourFormat12,
      coordinateFormat: this.coordinatesFormat,
      disabled: this.disabled,
      expirationTime: this.expiration,
      deviceLimit: this.deviceLimit,
      userLimit: this.userLimit,
      deviceReadonly: this.deviceReadonly,
      limitCommands: this.limitCommands,
      poiLayer: this.poiLayer,
      token: this.token,
      attributes: {}
    }
    this.authService.updateUser("/users/"+this.id, info).subscribe((res)=>{
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Data Updated Successfully!',
        confirmButtonColor: '#0162e8'
      })
    })
  }
}
