import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  messages: string[] =[];
  message: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  updateMessages() {
    this.messages.push(this.message);
    this.message = '';
    console.log(this.messages)
  }
}
