import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDataComponent } from './hourly-data.component';

describe('HourlyDataComponent', () => {
  let component: HourlyDataComponent;
  let fixture: ComponentFixture<HourlyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
