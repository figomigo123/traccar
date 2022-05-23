import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  private notifier: NotifierService;

  constructor( notifierService: NotifierService ) {
		this.notifier = notifierService;
	}

  ngOnInit(): void {
  }

  showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}
  callBackNotification( type: string, message: any ): void {
		this.notifier.notify( type, message );
	}

  OnPrimary(){
    this.notifier.notify("primary","Welcome to Xino");
  }
  OnSuccess(){
    this.notifier.notify("success","Success: Well done Details Submitted Successfully.");
  }
  OnError(){
    this.notifier.notify("error","Oops! An Error Occurred");
  }
  OnFixedError(){
    this.notifier.notify("error", "Error:This Error Will Stay Here Until You Click It.");
  }
  OnWarning(){
    this.notifier.notify( "warning", "Warning: Something Went Wrong");
  }
  OnInfo(){
    this.notifier.notify( "info", "Info: Some info here.");
  }
  OnOpacity(){
    this.notifier.notify("opacity","Opacity is cool!")
  }

  OnMultiple(){
    this.notifier.notify("info",  "Testing a multiline text. Testing, one, two.. More."  )
    
  }
  
  OnFade(){
    this.notifier.notify("success",  "Fade mode activated." )
  }
  
  OnCustomeBg(){
    this.notifier.notify("bgColor",  "Customize with your favourite color!")
  }

  
}
