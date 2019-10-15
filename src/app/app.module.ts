import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { HomeComponent } from './home/home.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';
import { A11yComponent } from './a11y/a11y.component';
import { PhotoWorkflowComponent } from './photo-workflow/photo-workflow.component';
import { PatternLibraryComponent } from './pattern-library/pattern-library.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SidebartoggleDirective,
    NavBarComponent,
    HomeComponent,
    LayoutTwoComponent,
    A11yComponent,
    PhotoWorkflowComponent,
    PatternLibraryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [SideBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
