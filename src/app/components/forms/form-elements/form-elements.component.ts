import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Moment } from 'moment'

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.scss']
})
export class FormElementsComponent implements OnInit {
  toggleClass = "on";
  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
  selectedDate ;
  model: NgbDateStruct;
  datePickerConfig

  public disable: boolean = true;
  public disabled: boolean = true;
  select = ['Firefox']
  selectValue = null;
  select2Countries = [
		{
			id: 'group1',
			title: 'Mountain Time Zone',
			countryNames: [
				{ id: "1", title: 'Arizona' },
				{ id: "2", title: 'Colorado' },
				{ id: "3", title: 'Idaho' },
				{ id: "4", title: 'Montana' },
				{ id: "5", title: 'Nebraska' },
				{ id: "6", title: 'New Mexico' },
				{ id: "7", title: 'North Dakota' },
				{ id: "8", title: 'Utah' },
				{ id: "9", title: 'Wyoming' },
			]
		},
		{
			id: "group2",
			title: 'Central Time Zone',
			countryNames: [
				{ id: "1", title: 'Alabama' },
				{ id: "2", title: 'Arkansas' },
				{ id: "3", title: 'Illinois' },
				{ id: "4", title: 'Iowa' },
				{ id: "5", title: 'Kansas' },
				{ id: "6", title: 'Kentucky' },
				{ id: "7", title: 'Louisiana' },
				{ id: "8", title: 'Minnesota' },
				{ id: "9", title: 'Mississippi' },
				{ id: "10", title: 'Missouri' },
				{ id: "11", title: 'Oklahoma' },
				{ id: "12", title: 'South Dakota' },
				{ id: "13", title: 'Texas' },
				{ id: "14", title: 'Tennessee' },
				{ id: "15", title: 'Wisconsin' },
			]
		}
	]
	selectValues = [
		{ value: 1, label: 'Firefox' },
		{ value: 2, label: 'Chrome' },
		{ value: 3, label: 'Safari' },
		{ value: 4, label: 'Opera' },
		{ value: 5, label: 'Internet Explorer' },
	]

	selected: { startDate: Moment, endDate: Moment };


  constructor() { }
  ngOnInit(): void {
    this.datePickerConfig = {
      firstDayOfWeek: 'su',
      monthFormat: 'MMM, YYYY',
      disableKeypress: false,
      allowMultiSelect: false,
      closeOnSelect: undefined,
      closeOnSelectDelay: 100,
      onOpenDelay: 0,
      weekDayFormat: 'ddd',
      appendTo: document.body,
      drops: 'down',
      opens: 'right',
      showNearMonthDays: true,
      showWeekNumbers: false,
      enableMonthSelector: true,
      format: "MM-DD-YYYY",
      yearFormat: 'YYYY',
      showGoToCurrent: true,
      dayBtnFormat: 'DD',
      monthBtnFormat: 'MMM',
      hours12Format: 'hh',
      hours24Format: 'HH',
      meridiemFormat: 'A',
      minutesFormat: 'mm',
      minutesInterval: 1,
      secondsFormat: 'ss',
      secondsInterval: 1,
      showSeconds: false,
      showTwentyFourHours: true,
      timeSeparator: ':',
      multipleYearsNavigateBy: 10,
      showMultipleYearsNavigation: false,
    }

    this.selectValue = this.selectValues[0];
  }
  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  status4 = 'main-toggle on';
  status5 = 'main-toggle main-toggle-secondary';
  status6 = 'main-toggle main-toggle-success';
  status7 = 'main-toggle main-toggle-dark';
  statusOn = "main-toggle "
  clickEvent() {
    this.status = !this.status;
  }
  clickEvent1() {
    this.status1 = !this.status1;
  }
  clickEvent2() {
    this.status2 = !this.status2;
  }
  clickEvent3() {
    this.status3 = !this.status3;
  }
  clickEvent4() {
    if(this.status4 != this.statusOn){
      document.querySelector('.main-toggle-group-demo.mg-t-10 .main-toggle').classList.toggle('on')
    }
  }
  clickEvent5(){
    if(this.status5 != this.statusOn){
      document.querySelector('.main-toggle-group-demo.mg-t-10 .main-toggle.main-toggle-secondary').classList.toggle('on')
    }
  }
  clickEvent6(){
    if(this.status6 != this.statusOn){
      document.querySelector('.main-toggle-group-demo.mg-t-10 .main-toggle.main-toggle-success ').classList.toggle('on')
    }
  }
  
  clickEvent7(){
    if(this.status7 != this.statusOn){
      document.querySelector('.main-toggle-group-demo.mg-t-10 .main-toggle.main-toggle-dark').classList.toggle('on')
    }
  }
  
}
