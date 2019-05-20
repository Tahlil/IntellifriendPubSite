import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  constructor() { }

  ngOnInit() {
  }

}
