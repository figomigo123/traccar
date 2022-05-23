export let popHTML1 = 
`<div class="row row-sm tx-center">
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="top"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover top">
            Click me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="left"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover left">
            Click me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="right"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover right">
            Click me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="bottom"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover bottom">
            Click me
        </button>
    </div>
</div>`
export let popTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent { }`


export let popHTML2 = 
` <div class="row row-sm tx-center">
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="top"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover top" popoverClass="popover-head-primary">
            Click me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="bottom"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover bottom" popoverClass="popover-head-primary">
            Click me
        </button>
    </div>
</div>`

export let popTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent { }`

export let popSCSS2 = 
`.popover-head-primary .popover-header {
    background-color: #5965f9;
    color: #fff;
}`

export let popHTML3 = 
`<div class="row row-sm tx-center">
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="top"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover top" popoverClass="popover-primary">
            Click me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-primary" placement="bottom"
            ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
            popoverTitle="Popover bottom" popoverClass="popover-primary">
            Click me
        </button>
    </div>
</div>`
export let popTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent { }`

export let popSCSS3 = 
`.popover-primary {
    background-color: #5965f9;
    color: #fff;
    border: none;
}
.popover-primary.bs-popover-top .arrow::after{
    border-top-color: #5965f9;
}`
