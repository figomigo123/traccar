import { Component, OnInit } from '@angular/core';
import { DefaultTableData } from 'src/app/shared/data/tables_data/basic';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss']
})
export class BasicTablesComponent implements OnInit {

  public defaultData = DefaultTableData;
  constructor() { }

  ngOnInit(): void {
  }

}
