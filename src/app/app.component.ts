import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ats-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  apptitle = 'Welcome to my portfolio';
  username = 'Visitor';

  ngOnInit() {
  }


}
