export let toastHTML1 = 
`<div>
    <ngb-toast *ngIf="show" [autohide]="false" (hidden)="show=false">
        <ng-template ngbToastHeader>
            <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6><small class="text-muted mr-2">11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
</div>`
export let toastTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  show = true;
}`

export let toastHTML2 = 
`<ngb-toast *ngIf="show1" [autohide]="false" (hidden)="show1=false">
    <ng-template ngbToastHeader>
        <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6><small class="text-muted mr-2">11 mins ago</small>
    </ng-template>
    Hello, world! This is a toast message.
</ngb-toast>`
export let toastTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  show1 = true;
}`

export let toastHTML3 = 
`<ngb-toast *ngIf="show2" [autohide]="false" (hidden)="show2=false">
    <ng-template ngbToastHeader>
        <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6><small class="text-muted mr-2">Just now</small>
    </ng-template>
    See? Just like this.
</ngb-toast>
<ngb-toast *ngIf="show3" [autohide]="false" (hidden)="show3=false">
    <ng-template ngbToastHeader>
        <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6><small class="text-muted mr-2">11 mins ago</small>
    </ng-template>
    Hello, world! This is a toast message.
</ngb-toast>`
export let toastTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  show2 = true;
  show3 = true;
}`

export let toastHTML4 = 
`<ngb-toast *ngIf="show4" [autohide]="false" (hidden)="show4=false">
    <ng-template ngbToastHeader>
        <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6><small class="text-muted mr-2">11 mins ago</small>
    </ng-template>
    Hello, world! This is a toast message.
</ngb-toast>`
export let toastTS4 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  
  show4 = true
}`

export let toastHTML5 = 
`<div class="demo-static-toast d-flex justify-content-center align-items-center">
    <ngb-toast *ngIf="show5" [autohide]="false" (hidden)="show5=false">
        <ng-template ngbToastHeader>
            <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6><small class="text-muted mr-2">11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
</div>`
export let toastTS5 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  show5 = false;
  autohide: boolean = true;

}`

export let toastHTML6 = 
`<div class="demo-static-toast pos-absolute b-10 r-10">
    <ngb-toast *ngIf="show6" [autohide]="false" (hidden)="show6=false">
        <ng-template ngbToastHeader>
            <h6 class="tx-14 mg-b-0 mg-r-auto">Notification</h6><small class="text-muted mr-2">11 mins ago</small>
        </ng-template>
        Hello, world! This is a toast message.
    </ngb-toast>
</div>`
export let toastTS6 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  show6 = true;

}`

export let toastHTML7 = 
`<div>
    <button class="btn btn-primary" (click)="show7 = true">
        Click me to show a toast
    </button>
        <hr *ngIf="show7">
    <ngb-toast *ngIf="show7" header="Autohide can be cancelled" [delay]="5000" [autohide]="autohide"
    (mouseenter)="autohide = false" (mouseleave)="autohide = true"
    (hide)="show7 = false; autohide = true" [class.bg-warning]="!autohide">
        <div *ngIf="autohide">
            Try to mouse hover me.
        </div>
        <div *ngIf="!autohide">
            I will remain visible until you leave again.
        </div>
    </ngb-toast>
</div>`
export let toastTS7 = 
`import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  show7 = true;
  autohide:boolean = true;

}`
