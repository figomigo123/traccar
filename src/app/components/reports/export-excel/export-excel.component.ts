import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports/reports.service';
import * as XLSX from 'xlsx';  


@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent implements OnInit {

  modules = ["Devices","Groups","Users"]
  URLModule = ["devices","groups","users"]

  heads = [
 
    "name",
  
    "Import",'Export'];
  loading: boolean = false;
  lang: any;
  constructor(private reportsService:ReportsService) { }

  ngOnInit(): void {
 
  }

 async getdata(name){
console.log(name)
const data = await this.reportsService.GetDevicesReport(this.URLModule[name])
console.log(data)
this.exportSheet(data,this.URLModule[name])
}

  exportSheet(data,Name){

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, Name+'.xlsx'); 
  }


  onFileChange(ev,name) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const dataString = JSON.stringify(jsonData["Sheet1"]);
     // document.getElementById('output').innerHTML = dataString.slice(0, 300).concat("...");
     // this.setDownload(dataString);
     this.reportsService.AddDevicesReport(this.URLModule[name],dataString)
    }
    reader.readAsBinaryString(file);
  }
}
