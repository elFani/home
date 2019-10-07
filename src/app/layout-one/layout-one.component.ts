import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'ats-layout-one',
  templateUrl: './layout-one.component.html',
  styles: []
})
export class LayoutOneComponent implements OnInit {
  academicDetails: boolean = true;
  contactDetails: boolean = true;
  
  constructor(private dataService:DataService) { }

  layoutOneProperty:string='';

  ngOnInit() {
    console.log(this.dataService.userTypes);
    
    this.layoutOneProperty = this.dataService.myData() + ' in layout-one!';
  }

}
