export let pageHTML1 = 
`<ngb-pagination [collectionSize]="30">
    <ng-template ngbPaginationPrevious><i class="icon ion-ios-arrow-back"></i></ng-template>
    <ng-template ngbPaginationNext><i class="icon ion-ios-arrow-forward"></i></ng-template>
</ngb-pagination>`
export let pageTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`

export let pageHTML2 = 
`<ngb-pagination class="pagination-dark" [collectionSize]="30">
    <ng-template ngbPaginationPrevious><i class="icon ion-ios-arrow-back"></i></ng-template>
    <ng-template ngbPaginationNext><i class="icon ion-ios-arrow-forward"></i></ng-template>
</ngb-pagination>`
export let pageTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`

export let pageHTML3 = 
`<div class="row row-sm">
    <div class="col-sm-6 col-lg-4">
        <ngb-pagination class="pagination-primary mb-sm-0" [collectionSize]="30">
            <ng-template ngbPaginationPrevious><i class="icon ion-ios-arrow-back"></i></ng-template>
            <ng-template ngbPaginationNext><i class="icon ion-ios-arrow-forward"></i></ng-template>
        </ngb-pagination>
    </div>
    <div class="col-sm-6 col-lg-4 mg-sm-t-0">
        <ngb-pagination class="pagination pagination-success mb-0" [collectionSize]="30">
            <ng-template ngbPaginationPrevious><i class="icon ion-ios-arrow-back"></i></ng-template>
            <ng-template ngbPaginationNext><i class="icon ion-ios-arrow-forward"></i></ng-template>
        </ngb-pagination>
    </div>
</div>`
export let pageTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    isDisabled = true;

    toggleDisabled() {
        this.isDisabled = !this.isDisabled;
    }
}`

export let pageHTML4 = 
`<ngb-pagination [collectionSize]="30" class="pagination-circled mb-0">
    <ng-template ngbPaginationPrevious><i class="icon ion-ios-arrow-back"></i></ng-template>
    <ng-template ngbPaginationNext><i class="icon ion-ios-arrow-forward"></i></ng-template>
</ngb-pagination>`
export let pageTS4 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent { }`
