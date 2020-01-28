import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCollegesComponent } from './compare-colleges.component';

describe('CompareCollegesComponent', () => {
  let component: CompareCollegesComponent;
  let fixture: ComponentFixture<CompareCollegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareCollegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
