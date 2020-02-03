import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayOutputComponent } from './two-way-output.component';

describe('TwoWayOutputComponent', () => {
  let component: TwoWayOutputComponent;
  let fixture: ComponentFixture<TwoWayOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
