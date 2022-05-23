import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})
export class SweetAlertComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  basicAlert() {
     Swal.fire({
       title: 'Welcome to Your Admin Page',
       confirmButtonColor: '#0162e8'
     })
  }

  titleAlert() {
    Swal.fire({
      title: 'Here is a title!',
      text: 'All are available in the template',
      confirmButtonColor: '#0162e8'
    })
  }

  successAlert(){
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'You clicked the button!',
      confirmButtonColor: '#0162e8'
    })
  }

  warningAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#0162e8',
      cancelButtonColor: '#0162e8',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8'
        })
      }
    })
  }

  parameterAlert(){
    Swal.fire({
      icon: "warning",
      title: 'Are you sure?',
      text: "You will not be able to recover this imaginary file!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#0162e8',
      cancelButtonText: 'No, cancel it!',
      cancelButtonColor: '#0162e8',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#0162e8'
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: '#0162e8'
        })
      }
    })
  }

  imageAlert(){
    Swal.fire({
      title: 'Lovely',
      text: 'Your image is uploaded.',
      imageUrl: '../../assets/img/brand/logo.png',
      confirmButtonColor: '#0162e8'
    })
  }

  timerAlert() {
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      confirmButtonColor: '#0162e8',
      timer: 2000,
      timerProgressBar: true,
    })
  }

  animationAlert() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      confirmButtonColor: '#0162e8',
    })
  }

}
