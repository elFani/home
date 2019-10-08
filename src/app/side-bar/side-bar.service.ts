import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SideBarService {

  constructor(private http: HttpClient) { }
  
  isOpen = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

  appsUrl = 'https://stark.ucsd.edu/api/portal/applist.php?callback=JSONP_CALLBACK&systemid=046f34e75dbf4f8a015de264132d0112';

  getApps() {
  	return this.http.get(this.appsUrl);
  }

}
