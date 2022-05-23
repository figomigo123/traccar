import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormWizardsComponent } from './form-wizards/form-wizards.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormsRoutingModule } from './forms-routing.module';
import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { ArchwizardModule } from 'angular-archwizard';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };
 


@NgModule({
  declarations: [ AdvancedFormsComponent, FormValidationComponent, FormWizardsComponent, FormEditorComponent, FormLayoutsComponent, FormElementsComponent],
  imports: [
    CommonModule, FormsRoutingModule, NgxMaskModule.forRoot(),ColorPickerModule,
    NgxDaterangepickerMd.forRoot(), DpDatePickerModule , ReactiveFormsModule, NgbModule, FormsModule ,NgSelectModule, AngularMultiSelectModule,
    NgxIntlTelInputModule,
    DropzoneModule,
    NgxDropzoneModule,
    AngularEditorModule,
    HttpClientModule,
    CKEditorModule,
    QuillModule.forRoot(),
    ArchwizardModule,
    ToastrModule.forRoot(
      {
        timeOut: 1000
      }
    ),
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    ToastrService
  ]
})
export class FormModule { }
