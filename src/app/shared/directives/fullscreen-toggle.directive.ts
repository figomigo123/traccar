import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, OnChanges, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';
@Directive({
  selector: '[appFullscreen]'
})
export class FullscreenDirective {

  public fullScreen: boolean = false;
  public elem : any;
  idata: HTMLElement;
  idd: HTMLElement;
  data: string;
  idata1: HTMLElement;
  idd1: HTMLElement;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {
   
   }

  ngOnInit(){
    this.elem = document.documentElement;
    this.idata = document.documentElement.querySelector('body').querySelectorAll('.nav-link.full-screen-link')[0].querySelector('i')
    this.idata1 = document.documentElement.querySelector('body').querySelectorAll('.nav-link.full-screen-link')[1].querySelector('i')
    document.addEventListener('fullscreenchange', this.exitHandler);
    document.addEventListener('webkitfullscreenchange', this.exitHandler);
    document.addEventListener('mozfullscreenchange', this.exitHandler);
    document.addEventListener('MSFullscreenChange', this.exitHandler);
  }
  @HostListener('click')
  
  onClick(){
    this.data = this.idata.classList.value
    if (this.data == "fe fe-maximize") {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
        this.idata.classList.add('fe-minimize')
        this.idata.classList.remove('fe-maximize')
        this.idata1.classList.add('fe-minimize')
        this.idata1.classList.remove('fe-maximize')
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
        this.idata.classList.add('fe-minimize')
        this.idata.classList.remove('fe-maximize')
        this.idata1.classList.add('fe-minimize')
        this.idata1.classList.remove('fe-maximize')
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
        this.idata.classList.add('fe-minimize')
        this.idata.classList.remove('fe-maximize')
        this.idata1.classList.add('fe-minimize')
        this.idata1.classList.remove('fe-maximize')
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
        this.idata.classList.add('fe-minimize')
        this.idata.classList.remove('fe-maximize')
        this.idata1.classList.add('fe-minimize')
        this.idata1.classList.remove('fe-maximize')
      }
    } 
    else {
      
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
        this.idata.classList.remove('fe-minimize')
        this.idata.classList.add('fe-maximize')
        this.idata1.classList.remove('fe-minimize')
        this.idata1.classList.add('fe-maximize')
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
        this.idata.classList.remove('fe-minimize')
        this.idata.classList.add('fe-maximize')
        this.idata1.classList.remove('fe-minimize')
        this.idata1.classList.add('fe-maximize')
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
        this.idata.classList.remove('fe-minimize')
        this.idata.classList.add('fe-maximize')
        this.idata1.classList.remove('fe-minimize')
        this.idata1.classList.add('fe-maximize')
        
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
        this.idata.classList.remove('fe-minimize')
        this.idata.classList.add('fe-maximize')
        this.idata1.classList.remove('fe-minimize')
        this.idata1.classList.add('fe-maximize')
      }
    }
  }

  exitHandler() {
    
    if (!document.fullscreenElement  ) {
      this.idd = document.querySelector('body').querySelectorAll('.nav-link.full-screen-link')[0].querySelector('i') 
      this.idd1 = document.querySelector('body').querySelectorAll('.nav-link.full-screen-link')[1].querySelector('i') 
      this.idd.classList.remove('fe-minimize')
      this.idd.classList.add('fe-maximize')
      this.idd1.classList.remove('fe-minimize')
      this.idd1.classList.add('fe-maximize')
    }
  }  


}
