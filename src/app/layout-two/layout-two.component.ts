import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ats-layout-two',
  templateUrl: './layout-two.component.html',
  styles: []
})
export class LayoutTwoComponent implements OnInit {
  kingTriton: boolean = true;
  ethylBromide: boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
