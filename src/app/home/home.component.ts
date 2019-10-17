import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ats-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  kingTriton: boolean = true;
  ethylBromide: boolean = true;
  about: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  hideAbout() {
    this.about = false;
  }

  showAbout() {
    this.about = true;
  }

}
