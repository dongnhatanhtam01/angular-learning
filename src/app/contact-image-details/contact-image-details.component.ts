import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tamdna-contact-image-details',
  templateUrl: './contact-image-details.component.html',
  styleUrls: ['./contact-image-details.component.scss']
})
export class ContactImageDetailsComponent implements OnInit {
  avatar: any = {};
  constructor() { }

  ngOnInit(): void {
    this.avatar.url = "https://via.placeholder.com/150.png/09f/fff%20C/O%20https://placeholder.com/?bg=e8117f"
  }
}
