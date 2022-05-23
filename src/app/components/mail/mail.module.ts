import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailComponent } from './mail/mail.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { MailSettingsComponent } from './mail-settings/mail-settings.component';
import { ChatComponent } from './chat/chat.component';
import { MailRoutingModule } from './mail-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [MailComponent, MailComposeComponent, ReadMailComponent, MailSettingsComponent, ChatComponent],
  imports: [
    CommonModule,MailRoutingModule,
    NgbModule, NgSelectModule
  ]
})
export class MailModule { }
