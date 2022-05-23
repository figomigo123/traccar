import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-compare',
  templateUrl: './image-compare.component.html',
  styleUrls: ['./image-compare.component.scss']
})
export class ImageCompareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  public images = [
    '../../assets/img/photos/compare1.jpg',
    '../../assets/img/photos/compare2.jpg'
  ]
  
}
