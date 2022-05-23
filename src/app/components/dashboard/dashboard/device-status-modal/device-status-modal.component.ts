import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { Device } from 'src/app/models/device';
import { Position } from 'src/app/models/position';

@Component({
  selector: 'app-device-status-modal',
  templateUrl: './device-status-modal.component.html',
  styleUrls: ['./device-status-modal.component.scss']
})
export class DeviceStatusModalComponent implements OnInit, OnChanges {

  @Input() device:Device;
  @Input() position:Position;
  positionKeyList:string[] = [];
  attributeKeyList:string[] = [];
  constructor() { }

  ngOnInit(): void {
    
    if(this.position){
      
      this.positionKeyList = Object.keys(this.position);
      this.attributeKeyList = Object.keys(this.position.attributes);
     
    }
  }

  ngOnChanges(){
   
  }

}
