import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoWorkflowComponent } from './photo-workflow.component';

describe('PhotoWorkflowComponent', () => {
  let component: PhotoWorkflowComponent;
  let fixture: ComponentFixture<PhotoWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
