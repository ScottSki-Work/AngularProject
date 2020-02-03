import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayInputComponent } from './two-way-input.component';

describe('TwoWayInputComponent', () => {
  let component: TwoWayInputComponent;
  let fixture: ComponentFixture<TwoWayInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
