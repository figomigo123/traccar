import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Driver } from 'src/app/models/driver';
import { DriverService } from 'src/app/services/driver/driver.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor(private driverService: DriverService, private modalService: NgbModal) { }

  isLoading = true;
  drivers: Driver[];
  selectedDriver: Driver = null;
  name: string;
  identifier: string;

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(){
    this.driverService.getDrivers("/drivers").subscribe((drivers)=>{
      this.drivers = drivers;
      this.isLoading = false;
    })
  }

  selectDriver(driver){
    this.selectedDriver = driver;
  }

  openAddDriverModal(modal){
    this.modalService.open(modal);
  }

  addDriver(event){
    event.preventDefault();
    let info = {
      name : this.name,
      uniqueId : this.identifier,
      attributes : {}
    }
    this.driverService.addDriver("/drivers", info).subscribe((res)=>{
      this.modalService.dismissAll();
      this.getDrivers();
      this.name = null;
      this.identifier = null;
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Driver Added Successfully!',
        confirmButtonColor: '#0162e8'
      })
    })
  }

  openEditDriverModal(modal){
    this.name = this.selectedDriver['name'];
    this.identifier = this.selectedDriver['uniqueId'];
    this.modalService.open(modal);
  }

  editDriver(event){
    event.preventDefault();
    let info = {
      name : this.name,
      uniqueId : this.identifier,
      attributes : {}
    }
    this.driverService.editDriver("/drivers/"+this.selectedDriver['id'], info).subscribe((res)=>{
      this.modalService.dismissAll();
      this.getDrivers();
      this.name = null;
      this.identifier = null;
      this.selectedDriver = null;
      Swal.fire({
        icon: 'success',
        title: 'Well Done!',
        text: 'Driver Editted Successfully!',
        confirmButtonColor: '#0162e8'
      })
    })
  }

  deleteDriver(){
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this driver!',
      showCancelButton: true,
      confirmButtonColor: '#0162e8',
      cancelButtonColor: '#0162e8',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.driverService.deleteDriver("/drivers/"+this.selectedDriver['id']).subscribe((res)=>{
          this.selectedDriver = null;
          this.getDrivers();
          Swal.fire({
            title: 'Deleted!',
            text: 'Driver Deleted Successfully.',
            icon: 'success',
            confirmButtonColor: '#0162e8'
          })
        })
      }
    })
  }

}
