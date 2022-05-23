import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export function requireCheckboxesToBeCheckedValidator(minRequired = 2): ValidatorFn {
  return function validate(formGroup: FormGroup) {
    let checked = 0;

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked++;
      }
    });

    if (checked < minRequired) {
      return {
        requireOneCheckboxToBeChecked: true,
      };
    }

    return null;
  };
}

export function requireCheckboxesValidator(minRequired = 1): ValidatorFn {
  return function validate(formGroup: FormGroup) {
    let checked = 0;

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked++;
      }
    });

    if (checked < minRequired) {
      return {
        requireOneCheckboxToBeChecked: true,
      };
    }

    return null;
  };
}

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  submitted = false;
  submitted1 = false;
  public inputForm: FormGroup;
  public emailForm: FormGroup;
  public checkboxForm: FormGroup;
  public selectForm: FormGroup;
  public basicForm: FormGroup;
  selectForm2: FormGroup;

  constructor( private fb: FormBuilder,
    private router: Router,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      firstname: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([a-zA-Z\s]+)$')
      ])],
      lastname: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([a-zA-Z\s]+)$')
      ])]
    })

    this.emailForm = this.fb.group({
      email: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([a-zA-Z\.]+)@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')
      ])]
    })

    this.checkboxForm = new FormGroup({

      myCheckboxGroup: new FormGroup({
        checkBox1: new FormControl(false),
        checkBox2: new FormControl(false),
        checkBox3: new FormControl(false),
        checkBox4: new FormControl(false)
      }, requireCheckboxesToBeCheckedValidator())

    })

    this.selectForm = this.fb.group({
      selectform: [null, Validators.required]
    })

    this.basicForm = this.fb.group({
      fullName: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([a-zA-Z\s]+)$')
      ])],
      lastname: [null, Validators.compose([
        Validators.required,
        Validators.pattern('^([a-zA-Z\s]+)$')
      ])],
      myCheckboxGroup: new FormGroup({
        checkBox1: new FormControl(false),
        checkBox2: new FormControl(false),
        checkBox3: new FormControl(false),
        checkBox4: new FormControl(false)
      }, requireCheckboxesValidator())
    })

  }

  get inputFormControl() {
    return this.inputForm.controls;
  }

  get emailFormControl() {
    return this.emailForm.controls;
  }

  get basicFormControl() {
    return this.basicForm.controls;
  }

  Submit() {
    if (this.inputForm.valid) {
      this.toast.success("Successfully Validated !")
    }
  }

  emailSubmit() {
    if (this.emailForm.valid) {
      this.toast.success("Valid Email !")
    } else if (this.emailForm.invalid) {
      this.toast.error("Please Fill the required details !")
    }
  }

  
  checkboxSubmit() {
    if (this.checkboxForm.valid) {
      this.toast.success("Successfully Validated !")
    }
  }

  selectSubmit() {
    if (this.selectForm.valid) {
      this.toast.success("Successfully Submitted !")
    } else if (this.selectForm.invalid) {
      this.toast.error("Please Fill the required details !")
    }
  }

  formSubmit() {
    if (this.basicForm.valid) {
      this.toast.success("Successfully Submitted", "Done!");
    } else if (this.basicForm.invalid) {
      this.toast.error('Please fill all the details!');
    }
  }
}
