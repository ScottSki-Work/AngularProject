import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcronymListComponent } from './acronym-list.component';

describe('AcronymListComponent', () => {
  let component: AcronymListComponent;
  let fixture: ComponentFixture<AcronymListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcronymListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcronymListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
