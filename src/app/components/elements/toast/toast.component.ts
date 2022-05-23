import { Component, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import * as codeData from '../../../shared/prismData/toasts'

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
    show = true;
    show1 = true;
    show2 = true;
    show3 = true;
    show4 = true;
    isclose = true;
    show5 = true;
    show6 = true;
    autohide: boolean = true;
    show7=false;
    constructor(
      public toastService: ToastService
      ){}
    
    ngOnInit(): void {
    }
    close() {
      this.isclose = false;
      setTimeout(() => this.isclose = true, 3000);
    }

    showStandard() {
      this.toastService.show('I am a standard toast');
    }
  
    showSuccess() {
      this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
    }
  
    showDanger(dangerTpl) {
      this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
    }
    html1: string = codeData.toastHTML1;
    ts1: string = codeData.toastTS1;
    html2: string = codeData.toastHTML2;
    ts2: string = codeData.toastTS2;
    html3: string = codeData.toastHTML3;
    ts3: string = codeData.toastTS3;
    html4: string = codeData.toastHTML4;
    ts4: string = codeData.toastTS4;
    html5: string = codeData.toastHTML5;
    ts5: string = codeData.toastTS5;
    html6: string = codeData.toastHTML6;
    ts6: string = codeData.toastTS6;
    html7: string = codeData.toastHTML7;
    ts7: string = codeData.toastTS7;


  }
  