import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  constructor(private modalService: NgbModal) {  }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, {backdrop : 'static' , windowClass : 'modalCusSty' })
  }

}
