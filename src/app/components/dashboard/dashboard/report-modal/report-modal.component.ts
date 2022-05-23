import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceService } from 'src/app/services/device/device.service';
import { Device } from 'src/app/models/device';
import { Subscription } from 'rxjs';
import { GroupService } from 'src/app/services/group/group.service';
import { Group } from 'src/app/models/group';
import { ReportService } from 'src/app/services/Report/report.service';
@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss']
})
export class ReportModalComponent implements OnInit, OnDestroy {


  deviceList: Device[] = [];
  subsList: Subscription[] = [];
  selectedDevices: Device[];
  groupList: Group[] = [];
  selectedGroups: Group[];
  selectedReportType: ReportType;
  fromDate: any;
  toDate: any;
  devices: string = "";
  groups: string = "";
  reportTypeList: ReportType[] = [{
    id: 1,
    nameAr: 'Route',
    nameEn: 'Route'
  },
  {
    id: 2,
    nameAr: 'Events',
    nameEn: 'Events'
  },
  {
    id: 3,
    nameAr: 'Trips',
    nameEn: 'Trips'
  },
  {
    id: 4,
    nameAr: 'Stops',
    nameEn: 'Stops'
  },
  {
    id: 5,
    nameAr: 'Summary',
    nameEn: 'Summary'
  },
  // {
  //   id: 6,
  //   nameAr: 'Daily Summary',
  //   nameEn: 'Daily Summary'
  // },
  // {
  //   id: 7,
  //   nameAr: 'Charts',
  //   nameEn: 'Charts'
  // },

  ];
  constructor(private deviceService: DeviceService,
    private groupService: GroupService,
    private reportService: ReportService) { }

  ngOnInit(): void {
    this.getDevices();
    this.getGroups();
  }


  getDevices() {
    let sub = this.deviceService.getAllDevices("/devices").subscribe(data => {
      if (data) {
        this.deviceList = data;
      }
    });

    this.subsList.push(sub);

  }


  getGroups() {
    let sub = this.groupService.getGroups("/groups").subscribe(data => {
      if (data) {
        this.groupList = data;
      }
    });

    this.subsList.push(sub);

  }

  ngOnDestroy() {
    this.subsList.forEach(s => {
      if (s) {
        s.unsubscribe();
      }
    })
  }

  showReport() {
    if(!this.fromDate){
      alert("Please Select Start Date");
      return;
    }
    if(!this.toDate){
      alert("Please Select End Date");
      return;
    }

    this.getDevicesAndGroups();

    if(this.groups.length == 0 && this.devices.length == 0){
      alert("Please select one group or on device at least");
      return;
    }

    if (this.selectedReportType) {
      if (this.selectedReportType.id == 1) {
        this.reportService.showRouteReport(this.devices, this.groups, this.convertToTimeZone(this.fromDate),
          this.convertToTimeZone(this.toDate)).subscribe(response => {
            this.downLoadFile(response, "application/ms-excel", 'reports')
          })
      }
      else if (this.selectedReportType.id == 2) {
        this.reportService.showEventsReport(this.devices, this.groups, '%', this.convertToTimeZone(this.fromDate),
          this.convertToTimeZone(this.toDate)).subscribe((response: any) => {
            //let disposition = response.getResponseHeader('Content-Disposition');
            // let filename = disposition.slice(disposition.indexOf('=') + 1, disposition.length);
            // console.log(disposition, filename)
            this.downLoadFile(response, "application/ms-excel", 'events')
          });

      }
      else if(this.selectedReportType.id == 3){
        this.reportService.showTripsReport(this.devices, this.groups, this.convertToTimeZone(this.fromDate), this.convertToTimeZone(this.toDate)).subscribe(response=>{
          this.downLoadFile(response, "application/ms-excel", 'trips');
        })
      }

      else if(this.selectedReportType.id == 4){
        this.reportService.showStopsReport(this.devices, this.groups, this.convertToTimeZone(this.fromDate), this.convertToTimeZone(this.toDate)).subscribe(response=>{
          this.downLoadFile(response, "application/ms-excel", 'stops');
        })
      }

      else if(this.selectedReportType.id == 5){
        this.reportService.showSummaryReport(this.devices, this.groups, this.convertToTimeZone(this.fromDate), this.convertToTimeZone(this.toDate)).subscribe(response=>{
          this.downLoadFile(response, "application/ms-excel", 'summary');
        })
      }

    } else {
      alert("Please Select Report Type");
    }

  }

  getDevicesAndGroups() {
    this.devices = "";
    this.groups = "";
    if (this.selectedDevices) {

      this.selectedDevices.forEach(d => {
        this.devices += "deviceId=" + d.id + "&";
      })
      console.log(this.devices);
      this.devices = this.devices.slice(0, this.devices.length - 1);
    }

    if (this.selectedGroups) {

      this.selectedGroups.forEach(d => {
        this.groups += "groupId=" + d.id + "&";
      })
      console.log(this.groups);
      this.groups = this.groups.slice(0, this.groups.length - 1);
    }
    console.log(this.devices, this.groups);

  }

  downLoadFile(data: any, type: string, fileName: string) {
    let blob = new Blob([data], { type: type });
    debugger
    let url = window.URL.createObjectURL(blob);
    debugger
    console.log(url);
    debugger
    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = `${fileName}.xlsx`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    //let a = $("<a />", {href: url,download: "filename.xlsx"}).appendTo("body").get(0).click();
    // let pwa = window.open(url);
    // if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
    //   alert('Please disable your Pop-up blocker and try again.');
    // }
  }


  convertToTimeZone(date: Date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dayStr: string = (day + "").length == 1 ? ("0" + day) : day + "";
    let monthStr: string = (month + "").length == 1 ? ("0" + month) : month + "";
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hourString = (hour + "").length == 1 ? ("0" + hour) : (hour + "");
    let minString = (min + "").length == 1 ? ("0" + min) : (min + "");
    let secString = (sec + "").length == 1 ? ("0" + sec) : (sec + "");
    return `${year}-${monthStr}-${dayStr}T${hourString}:${minString}:${secString}Z`;


  }
}


export class ReportType {
  id: number;
  nameAr: string;
  nameEn: string;
}
