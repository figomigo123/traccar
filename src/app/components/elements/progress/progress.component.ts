import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/progress'
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html1: string = codeData.progressHTML1;
  ts1: string = codeData.progressTS1;
  html2: string = codeData.progressHTML2;
  ts2: string = codeData.progressTS2;
  html3: string = codeData.progressHTML3;
  ts3: string = codeData.progressTS3;
  scss3:string = codeData.progressSCSS3
  html4: string = codeData.progressHTML4;
  ts4: string = codeData.progressTS4;
}
