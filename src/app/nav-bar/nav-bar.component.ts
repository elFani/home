import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ats-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {
  @Input() username:string;
  @Input() apptitle:string;
  mobileNavCollapse: boolean = true;


  constructor() { }

  ngOnInit() {
  }

}
