import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';


import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarService } from './side-bar/side-bar.service';
import { SidebartoggleDirective } from './side-bar/sidebartoggle.directive';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { appRoutes } from './routes';
import { LayoutOneComponent } from './layout-one/layout-one.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SidebartoggleDirective,
    NavBarComponent,
    LayoutOneComponent,
    LayoutTwoComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [SideBarService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
