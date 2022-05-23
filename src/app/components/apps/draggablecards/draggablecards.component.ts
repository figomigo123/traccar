import { Component, OnInit } from '@angular/core';
import {dragula} from 'ng2-dragula';

@Component({
  selector: 'app-draggablecards',
  templateUrl: './draggablecards.component.html',
  styleUrls: ['./draggablecards.component.scss']
})
export class DraggablecardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    dragula(
      [
        document.querySelector('#left-defaults'), 
        document.querySelector('#right-defaults'),
        document.querySelector('#left-events'),
      ]);
  }
 

}
