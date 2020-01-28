import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsContentRoutingModule } from './projects-content-routing.module';
import { A11yComponent } from '../../components/a11y/a11y.component';
import { PhotoWorkflowComponent } from '../../components/photo-workflow/photo-workflow.component';
import { PatternLibraryComponent } from '../../components/pattern-library/pattern-library.component';
import { AboutAppComponent } from '../../components/about-app/about-app.component';
import { CompareCollegesComponent } from '../../components/compare-colleges/compare-colleges.component';


@NgModule({
  declarations: [ AboutAppComponent, A11yComponent, PhotoWorkflowComponent, PatternLibraryComponent, CompareCollegesComponent ],
  imports: [
    CommonModule,
    ProjectsContentRoutingModule
  ]
})
export class ProjectsContentModule { }
