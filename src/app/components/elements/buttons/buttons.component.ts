import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/buttons';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  html1: string = codeData.buttonsHTML1;
  ts1: string = codeData.buttonsTS1;
  html2: string = codeData.buttonsHTML2;
  ts2: string = codeData.buttonsTS2;
  html3: string = codeData.buttonsHTML3;
  ts3: string = codeData.buttonsTS3;
  html4: string = codeData.buttonsHTML4;
  ts4: string = codeData.buttonsTS4;
  html5: string = codeData.buttonsHTML5;
  ts5: string = codeData.buttonsTS5;
  html6: string = codeData.buttonsHTML6;
  ts6: string = codeData.buttonsTS6;
  html7: string = codeData.buttonsHTML7;
  ts7: string = codeData.buttonsTS7;

}
