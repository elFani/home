import { Component, HostBinding, Input } from '@angular/core';
import { SideBarService } from './side-bar.service';
import { Http, Headers, Response } from '@angular/http';


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
  
  url = 'https://stark.ucsd.edu/api/portal/applist.php?callback=JSONP_CALLBACK&systemid=046f34e75dbf4f8a015de264132d0112';
  apps = [];

  constructor(
    private sideBarService: SideBarService, private http: Http
  ) {}

  ngOnInit() {
    this.sideBarService.change.subscribe(isOpen => { this.isOpen = isOpen; });
    this.http.get(this.url).subscribe((res) => { this.apps = res.json(); });

  }

}
