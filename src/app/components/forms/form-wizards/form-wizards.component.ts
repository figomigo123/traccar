import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';

@Component({
  selector: 'app-form-wizards',
  templateUrl: './form-wizards.component.html',
  styleUrls: ['./form-wizards.component.scss']
})
export class FormWizardsComponent  {

  constructor(
    private toaster: ToastrService
  ) { }

  public finish() {
    this.toaster.success('Successfully Done!')
  }
}
