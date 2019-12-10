import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  items: Array<string> = [
    './assets/images/house.jpg',
    './assets/images/kitchen1.jpg',
    './assets/images/livingroom.jpg'
  ];

  constructor() {
   }


  ngOnInit() {
  }

}
