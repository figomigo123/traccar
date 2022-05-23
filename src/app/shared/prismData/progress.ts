export let progressHTML1 = 
`<div class="mg-b-20">
    <ngb-progressbar type="primary" [value]="25"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="success" [value]="35"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="warning" [value]="50"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="danger" [value]="65"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="indigo" [value]="75"></ngb-progressbar>
</div>`
export let progressTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`

export let progressHTML2 = 
`<div class="mg-b-20">
    <ngb-progressbar type="primary" [value]="25" [striped]="true"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="success" [value]="35" [striped]="true"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="warning" [value]="50" [striped]="true"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="danger" [value]="65" [striped]="true"></ngb-progressbar>
</div>
<div class="mg-b-20">
    <ngb-progressbar type="indigo" [value]="75" [striped]="true"></ngb-progressbar>
</div>`
export let progressTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`

export let progressHTML3 = 
`<div>
    <span class="tx-uppercase tx-11 d-block mg-b-5">Size Super Extra Small</span>
    <div class="mg-b-10">
        <ngb-progressbar type="primary" [value]="25" height="2px"></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="success" [value]="35" height="2px"></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="danger" [value]="50" height="2px"></ngb-progressbar>
    </div>
    <span class="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Extra Small</span>
    <div class="mg-b-10">
        <ngb-progressbar type="primary" [value]="25" height="5px"></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="success" [value]="35" height="5px"></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="danger" [value]="50" height="5px"></ngb-progressbar>
    </div>

    <span class="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Small</span>
    <div class="mg-b-10">
        <ngb-progressbar type="primary" [value]="25" height="7px"></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="success" [value]="35" height="7px"></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="danger" [value]="50" height="7px"></ngb-progressbar>
    </div>
    <span class="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Normal</span>
    <div class="mg-b-10">
        <ngb-progressbar type="primary" [value]="25" ></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="success" [value]="35" ></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="danger" [value]="50" ></ngb-progressbar>
    </div>

    <span class="tx-uppercase tx-11 d-block mg-t-20 mg-b-5">Size Large</span>
    <div class="mg-b-10">
        <ngb-progressbar type="primary" [value]="25" height="16px" class="large"></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="success" [value]="35" height="16px" class="large"></ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="danger" [value]="50" height="16px" class="large"></ngb-progressbar>
    </div>
</div>`
export let progressTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`
export let progressSCSS3 = 
`::ng-deep{
    .progress.large{
        height: 15px;
    }
    .large .progress-bar{
        height: 15px;
    }
}`

export let progressHTML4 = 
`<div>
    <div class="mg-b-10">
        <ngb-progressbar type="primary" [value]="50">50%</ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="success" [value]="60">60%</ngb-progressbar>
    </div>
    <div class="mg-b-10">
        <ngb-progressbar type="danger" [value]="95">95%</ngb-progressbar>
    </div>
</div>`
export let progressTS4 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent { }`
