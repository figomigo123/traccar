export let tagsHTML1 = 
`<span class="tag">First tag</span>
<span class="tag">Second tag</span>
<span class="tag">Third tag</span>`
export let tagsTS1 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent { }`

export let tagsHTML2 = 
`<span class="tag tag-rounded">First tag</span>
<span class="tag tag-rounded">Second tag</span>
<span class="tag tag-rounded">Third tag</span>`
export let tagsTS2 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent { }`

export let tagsHTML3 = 
`<span class="tag tag-default">
    One <a href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a>
</span>
<span class="tag tag-default">
    Two <a href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a>
</span>
<span class="tag tag-default">
    Three <a href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a>
</span>
<span class="tag tag-default">
    Four <a href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a>
</span>`
export let tagsTS3 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent { }`

export let tagsHTML4 = 
`<span class="tag tag-blue">Blue tag</span>
<span class="tag tag-azure">Azure tag</span>
<span class="tag tag-indigo">Indigo tag</span>
<span class="tag tag-purple">Purple tag</span>
<span class="tag tag-pink">Pink tag</span>
<span class="tag tag-red">Red tag</span>
<span class="tag tag-orange">Orange tag</span>
<span class="tag tag-yellow">Yellow tag</span>
<span class="tag tag-lime">Lime tag</span>
<span class="tag tag-green">Green tag</span>
<span class="tag tag-teal">Teal tag</span>
<span class="tag tag-cyan">Cyan tag</span>
<span class="tag tag-gray">Gray tag</span>
<span class="tag tag-gray-dark">Dark gray tag</span>`
export let tagsTS4 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent { }`

export let tagsHTML5 = 
`<ng-select class="form-control" [items]="selectValues" [multiple]="true" [(ngModel)]="select">
    <ng-option *ngFor="let select of selectValues">{{select.label}}</ng-option>
</ng-select>`
export let tagsTS5 = 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
    select = ['jQuery']
    selectValue= null ;
    constructor() { }
    selectValues = [
          { value: 1, label: 'jQuery' },
          { value: 2, label: 'Angular' },
          { value: 3, label: 'React' },
          { value: 4, label: 'Vue' },
      ]
    ngOnInit(): void {
      this.selectValue = this.selectValues[0];
    }
 }`
