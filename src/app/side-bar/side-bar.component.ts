import { Component, HostBinding, Input } from '@angular/core';
import { SideBarService } from './side-bar.service';
// import { HttpClient, Headers, Response } from '@angular/common/http';
// import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'ats-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() username: string;
  @HostBinding('class.is-open')
  isOpen = false;
  dismissible = true;

  // url = 'https://stark.ucsd.edu/api/portal/applist.php?callback=JSONP_CALLBACK&systemid=046f34e75dbf4f8a015de264132d0112';

  apps: string [];

  constructor( private sideBarService: SideBarService, private http: HttpClient) {}

  // showApps() {
  //   this.sideBarService.getApps()
  //   .subscribe((data: Application) => this.application = {} );
  // }

  ngOnInit() {
    this.sideBarService.change.subscribe(isOpen => { this.isOpen = isOpen; });

    // this.http.get(this.url).subscribe( data => {this.apps = data as string []; });

    this.sideBarService.getApps().subscribe(data => { this.apps = data as string []; });   // FILL THE ARRAY WITH DATA.

    // this.http.get(this.url).subscribe((res) => { this.apps = res.json(); });

    // console.log(this.http.get(this.url));

  }
}
