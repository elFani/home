import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  apptitle = 'Welcome';
  username = 'Albert Oregano';

  constructor(private dataService:DataService){}

  someProperty:string='';

  ngOnInit(){
    console.log(this.dataService.userTypes);

    this.someProperty = this.dataService.myData();
  }
}
