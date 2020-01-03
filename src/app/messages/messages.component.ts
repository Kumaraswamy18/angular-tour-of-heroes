import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {

  constructor(public messageService: MessageService) { console.log('MessagesComponent constructor'); }

  ngOnInit() {
    console.log('MessagesComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('MessagesComponent ngOnDestroy');
  }

}
