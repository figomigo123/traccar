export let tooltipHTML1 = 
`<div class="row row-sm tx-center">
    <div class="col-sm-6 col-lg-3">
        <button type="button" class="btn btn-secondary" placement="bottom"
            ngbTooltip="Tooltip on Bottom">
            Hover me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30  mg-sm-t-0">
        <button type="button" class="btn btn-primary" placement="top"
            ngbTooltip="Tooltip on Top">
            Hover me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
        <button type="button" class="btn btn-info" placement="left"
            ngbTooltip="Tooltip on Left">
            Hover me
        </button>
    </div>
    <div class="col-sm-6 col-lg-3 mg-t-30 mg-lg-t-0">
        <button type="button" class="btn btn-danger" placement="right"
            ngbTooltip="Tooltip on Right">
            Hover me
        </button>
    </div>
</div>`
export let tooltipTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent { }`


export let tooltipHTML2 = 
`<div class="bg-gray-200 pd-20">
    <div class="row row-sm tx-center">
        <div class="col-sm-6 col-lg-3">
            <button type="button" class="btn btn-primary" ngbTooltip="Tooltip on top" placement="top"
                    tooltipClass="tooltip-primary">Hover me</button>
        </div>
        <div class="col-sm-6 col-lg-3">
            <button type="button" class="btn btn-primary" ngbTooltip="Tooltip on bottom" placement="bottom"
                    tooltipClass="tooltip-primary">Hover me</button>
        </div>
        <div class="col-sm-6 col-lg-3">
            <button type="button" class="btn btn-primary" ngbTooltip="Tooltip on left" placement="left"
                    tooltipClass="tooltip-primary">Hover me</button>
        </div>
        <div class="col-sm-6 col-lg-3">
            <button type="button" class="btn btn-primary" ngbTooltip="Tooltip on right" placement="right"
                    tooltipClass="tooltip-primary">Hover me</button>
        </div>
    </div>
</div>`
export let tooltipTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent { }`
export let tooltipSCSS2 = 
`.tooltip-primary {
    background-color: #5965f9 ;
}
.tooltip-primary.bs-tooltip-top .arrow::before{
    border-top-color : #5965f9;
}
`
