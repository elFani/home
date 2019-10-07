import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  userTypes = ['Student','Advisor','Graduate Advisor'];

  myData(){
    return 'This is my data, man!';
  }

}
