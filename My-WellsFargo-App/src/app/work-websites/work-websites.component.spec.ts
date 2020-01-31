import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWebsitesComponent } from './work-websites.component';

describe('WorkWebsitesComponent', () => {
  let component: WorkWebsitesComponent;
  let fixture: ComponentFixture<WorkWebsitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkWebsitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
