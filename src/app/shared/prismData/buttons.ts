export let buttonsHTML1 = 
`<div class="row row-xs wd-xl-80p">
  <div class="col-sm-6 col-md-3">
      <button class="btn btn-primary btn-block">Primary</button>
  </div>
  <div class="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0">
      <button class="btn btn-secondary btn-block">Secondary</button>
  </div>
  <div class="col-sm-6 col-md-3 mg-t-10 mg-md-t-0">
      <button class="btn btn-success btn-block">Success</button>
  </div>
  <div class="col-sm-6 col-md-3 mg-t-10 mg-md-t-0">
      <button class="btn btn-warning btn-block">Warning</button>
  </div>
  <div class="col-sm-6 col-md-3 mg-t-10">
      <button class="btn btn-danger btn-block">Danger</button>
  </div>
  <div class="col-sm-6 col-md-3 mg-t-10">
      <button class="btn btn-info btn-block">Info</button>
  </div>
  <div class="col-sm-6 col-md-3 mg-t-10">
      <button class="btn btn-light btn-block">Light</button>
  </div>
  <div class="col-sm-6 col-md-3 mg-t-10">
      <button class="btn btn-dark btn-block">Dark</button>
  </div>
</div>`
export let buttonsTS1 =
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent { }`

export let buttonsHTML2 = 
`<div class="row row-xs wd-xl-80p">
    <div class="col-sm-6 col-md-3">
        <button class="btn btn-outline-primary btn-block">Primary</button>
    </div>
    <div class="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0">
        <button class="btn btn-outline-secondary btn-block">Secondary</button>
    </div>
    <div class="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0">
        <button class="btn btn-outline-success btn-block">Success</button>
    </div>
    <div class="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0">
        <button class="btn btn-outline-warning btn-block">Warning</button>
    </div>
    <div class="col-sm-6 col-md-3 mg-t-10">
        <button class="btn btn-outline-danger btn-block">Danger</button>
    </div>
    <div class="col-sm-6 col-md-3 mg-t-10">
        <button class="btn btn-outline-info btn-block">Info</button>
    </div>
    <div class="col-sm-6 col-md-3 mg-t-10">
        <button class="btn btn-outline-light btn-block">Light</button>
    </div>
    <div class="col-sm-6 col-md-3 mg-t-10">
        <button class="btn btn-outline-dark btn-block">Dark</button>
    </div>
</div>`
export let buttonsTS2 =
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent { }`
export let buttonsHTML3 = 
`<div class="row row-xs wd-xl-80p">
    <div class="col-sm-6 col-md-3"><button class="btn btn-primary btn-rounded btn-block">Primary</button></div>
    <div class="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0"><button class="btn btn-outline-indigo btn-rounded btn-block">Primary</button></div>
    <div class="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><button class="btn btn-secondary btn-rounded btn-block">Secondary</button></div>
    <div class="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><button class="btn btn-outline-secondary btn-rounded btn-block">Secondary</button></div>
</div>`
export let buttonsTS3 =
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent { }`
export let buttonsHTML4 = 
`<div class="row row-xs wd-xl-80p">
    <div class="col-sm-6 col-md-3"><button class="btn btn-indigo btn-with-icon btn-block"><i class="typcn typcn-folder"></i> Folder</button></div>
    <div class="col-sm-6 col-md-3 mg-t-10 mg-sm-t-0"><button class="btn btn-primary btn-with-icon btn-block"><i class="typcn typcn-mail"></i> Mail</button></div>
    <div class="col-sm-6 col-md-3 mg-t-10 mg-md-t-0"><button class="btn btn-success btn-with-icon btn-block"><i class="typcn typcn-edit"></i> Edit</button></div>
</div>`
export let buttonsTS4 =
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent { }`
export let buttonsHTML5 = 
`<div class="btn-icon-list">
    <button class="btn btn-indigo btn-icon"><i class="typcn typcn-folder"></i></button>
    <button class="btn btn-primary btn-icon"><i class="typcn typcn-calendar-outline"></i></button>
    <button class="btn btn-success btn-icon"><i class="typcn typcn-document-add"></i></button>
    <button class="btn btn-info btn-icon"><i class="typcn typcn-arrow-back-outline"></i></button>
</div>`
export let buttonsTS5 =
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent { }`
export let buttonsHTML6 = 
`<div class="col-sm-6 col-md-3">
    <div ngbDropdown>
        <button class="btn ripple btn-indigo btn-block" ngbDropdownToggle type="button">Dropdown
            <i class="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
        </button>
        <div class="tx-13" ngbDropdownMenu>
            <a ngbDropdownItem href="javascript:;">Profile</a>
            <a ngbDropdownItem href="javascript:;">Activity Logs</a>
            <a ngbDropdownItem href="javascript:;">Account Settings</a>
            <a ngbDropdownItem href="javascript:;">Logout</a>
        </div>
    </div>
    </div>
    <div class="col-sm-6 col-md-3">
    <div ngbDropdown >
        <button class="btn ripple btn-primary btn-block" ngbDropdownToggle type="button">Dropdown
            <i class="icon ion-ios-arrow-down tx-11 mg-l-3"></i>
        </button>
        <div class="tx-13" ngbDropdownMenu>
            <a ngbDropdownItem href="javascript:;">Profile</a>
            <a ngbDropdownItem href="javascript:;">Activity Logs</a>
            <a ngbDropdownItem href="javascript:;">Account Settings</a>
            <a ngbDropdownItem href="javascript:;">Logout</a>
        </div>
    </div>

</div>`
export let buttonsTS6 =
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent { }`
export let buttonsHTML7 = 
`<div class="row row-sm">
    <div class="col-lg-4">
        <div aria-label="Basic example" class="btn-group" role="group">
            <button class="btn btn-secondary pd-x-25 active" type="button">Left</button> 
            <button class="btn btn-secondary pd-x-25" type="button">Center</button> 
            <button class="btn btn-secondary pd-x-25" type="button">Right</button>
        </div>
    </div>
    <div class="col-lg-2 mg-t-20 mg-lg-t-0">
        <div aria-label="Basic example" class="btn-group" role="group">
            <button class="btn btn-secondary btn-icon active" type="button"><i class="typcn typcn-media-play-outline"></i></button> 
            <button class="btn btn-secondary btn-icon" type="button"><i class="typcn typcn-media-pause-outline"></i></button> 
            <button class="btn btn-secondary btn-icon" type="button"><i class="typcn typcn-media-stop-outline"></i></button>
        </div>
    </div>
    <div class="col-lg-4 mg-t-20 mg-lg-t-0">
        <div aria-label="Basic example" class="btn-group" role="group">
            <button class="btn btn-indigo btn-icon active" type="button"><i class="typcn typcn-media-play-outline"></i></button> 
            <button class="btn btn-primary btn-icon" type="button"><i class="typcn typcn-media-pause-outline"></i></button> 
            <button class="btn btn-primary btn-icon" type="button"><i class="typcn typcn-media-stop-outline"></i></button>
        </div>
    </div>
</div>`
export let buttonsTS7 =
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent { }`
