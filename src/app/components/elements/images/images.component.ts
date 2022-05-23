import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/images'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html1: string = codeData.imgHTML1;
  ts1: string = codeData.imgTS1;
  html2: string = codeData.imgHTML2;
  ts2: string = codeData.imgTS2;
  html3: string = codeData.imgHTML3;
  ts3: string = codeData.imgTS3;
  html4: string = codeData.imgHTML4;
  ts4: string = codeData.imgTS4;
}
