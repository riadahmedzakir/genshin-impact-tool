import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePlansDefaultComponent } from './future-plans-default.component';

describe('FuturePlansDefaultComponent', () => {
  let component: FuturePlansDefaultComponent;
  let fixture: ComponentFixture<FuturePlansDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturePlansDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePlansDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
