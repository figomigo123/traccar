import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';
import { SimpleDataTable } from 'src/app/shared/data/tables_data/data_table';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {
  dataTable = SimpleDataTable;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    let dataTable1 = new DataTable("#myTable1", {
      searchable: true,
      fixedHeight: true,
    });

  }

}
