import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  //The messageservice should be public because u are goiing to bind to into the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
