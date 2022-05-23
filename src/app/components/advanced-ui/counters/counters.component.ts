import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { addDays } from 'date-fns';
import { timer } from 'rxjs';
import { countUpTimerConfigModel, countDownTimerConfigModel, timerTexts ,countDownTimerTexts ,CountupTimerService ,CountdownTimerService  } from 'ngx-timer';    
import counterUp from 'counterup2'

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  @ViewChild('counterdown0' , {static: true}) counter0: ElementRef;
  counter0Span:any;
  
  public countup:string;
  public countdown: string;
  public countdown0: string;
  intervalCountUp:number = 0;
  intervalCountDown:number = 60;
  intervalCountDown0:number = 60;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  
  testConfig: countDownTimerConfigModel;
  testConfigUp: countUpTimerConfigModel;
  testConfigDown: countDownTimerConfigModel;
  completedCountDown: boolean;
  completedCountDown0: boolean;
 
  constructor(private elf : ElementRef,
              private countupTimerService:CountupTimerService,
              private CountdownTimerService:CountdownTimerService
              ) {    

                let cdate = new Date();
                cdate.setHours(cdate.getHours() + 3);
                this.CountdownTimerService.startTimer(cdate);
                
                let currentDateUp = new Date();
                currentDateUp.setMinutes(currentDateUp.getMinutes());
                this.countupTimerService.startTimer(currentDateUp);
                
  }

  ngOnInit() {
  

    this.testConfig = new countDownTimerConfigModel();
    
    //custom class
    this.testConfig.timerClass  = 'CountDown_Date';
 
    //timer text values  
    this.testConfig.timerTexts = new timerTexts();
    this.testConfig.timerTexts.hourText = "Hours"; //default - hh
    this.testConfig.timerTexts.minuteText = "Minutes"; //default - mm
    this.testConfig.timerTexts.secondsText = "Seconds"; //default - ss

    this.testConfigUp = new countUpTimerConfigModel();
    
    //custom class
    this.testConfigUp.timerClass  = 'CountUp_Minute';
 
    //timer text values  
    this.testConfigUp.timerTexts = new timerTexts();
    this.testConfigUp.timerTexts.hourText = ":"; //default - hh
    this.testConfigUp.timerTexts.minuteText = ":"; //default - mm
    this.testConfigUp.timerTexts.secondsText = " "; //default - ss

    const el1 = document.querySelector( '.counter1'  )
    const el2 = document.querySelector( '.counter2'  )
    const el3 = document.querySelector( '.counter3'  )
 
  // Start counting, do this on DOM ready or with Waypoints.
  counterUp( el1, {
        duration: 1000,
        delay: 16,
    } )
  counterUp( el2, {
        duration: 1000,
        delay: 16,
    } )
  counterUp( el3, {
        duration: 1000,
        delay: 16,
    } )
  
    
    this.countdown = this.getTime();
    const co = timer(1000, 1000).subscribe(val => {
      this.manipulateInterval();
      this.countdown = this.getTime();
      if (this.intervalCountDown === 20) {
        this.completedCountDown = false;
      }
    });
    
    this.countdown0 = this.getTime0();
    const countdownObservable0 = timer(1000, 1000).subscribe(val => {
      this.manipulateInterval0();
      this.countdown0 = this.getTime0();
      if (this.intervalCountDown0 === 0) {
        this.completedCountDown0 = false;
        this.counter0.nativeElement.classList.add('muteCount')
      }
    });
  }

  private getTime(): string {
    if (this.intervalCountDown > 20) {
      this.intervalCountDown = Math.abs(this.intervalCountDown);
      this.completedCountDown = true;
    }
    const hours = Math.floor(this.intervalCountDown / 3600);
    const minutes = Math.floor((this.intervalCountDown - hours * 3600) / 60);
    const seconds = this.intervalCountDown - hours * 3600 - minutes * 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  private manipulateInterval() {
    if (this.completedCountDown) {
      this.intervalCountDown--;
    }
  }
  

  private getTime0(): string {
    if (this.intervalCountDown0 > 0) {
      this.intervalCountDown0 = Math.abs(this.intervalCountDown0);
      this.completedCountDown0 = true;
    }
    const hours = Math.floor(this.intervalCountDown0 / 3600);
    const minutes = Math.floor((this.intervalCountDown0 - hours * 3600) / 60);
    const seconds = this.intervalCountDown0 - hours * 3600 - minutes * 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  
  private manipulateInterval0() {
    if (this.completedCountDown0) {
      this.intervalCountDown0--;
    }
  }
}
