import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-empty-page',
  templateUrl: './empty-page.component.html',
  styleUrls: ['./empty-page.component.scss']
})
export class EmptyPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
 
}
