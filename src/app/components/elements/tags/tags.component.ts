import { Component, OnInit } from '@angular/core';
import * as codeData from '../../../shared/prismData/tags'
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
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

  html1: string = codeData.tagsHTML1;
  ts1: string = codeData.tagsTS1;
  html2: string = codeData.tagsHTML2;
  ts2: string = codeData.tagsTS2;
  html3: string = codeData.tagsHTML3;
  ts3: string = codeData.tagsTS3;
  html4: string = codeData.tagsHTML4;
  ts4: string = codeData.tagsTS4;
  html5: string = codeData.tagsHTML5;
  ts5: string = codeData.tagsTS5;
}
