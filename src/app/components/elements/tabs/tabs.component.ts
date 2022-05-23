import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/tabs'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  html1: string = codeData.tabsHTML1;
  ts1: string = codeData.tabsTS1;
  html12: string = codeData.tabsHTML2;
  ts12: string = codeData.tabsTS2;
  html13: string = codeData.tabsHTML3;
  ts13: string = codeData.tabsTS3;
  html14: string = codeData.tabsHTML4;
  ts14: string = codeData.tabsTS4;
  html15: string = codeData.tabsHTML5;
  ts15: string = codeData.tabsTS5;
}
