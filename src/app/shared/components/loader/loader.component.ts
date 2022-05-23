import { Component, OnInit, OnDestroy, HostListener, Input, Inject } from '@angular/core';

import { Router , NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError} from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {

  public loader: boolean = true;
  
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.loader = true;
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError){
          this.loader = false;
        }
      },
      () => {
        this.loader = false;
      }
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.loader = false;
  }

}



