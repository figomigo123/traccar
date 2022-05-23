import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcalendarsComponent } from './addcalendars.component';

describe('AddcalendarsComponent', () => {
  let component: AddcalendarsComponent;
  let fixture: ComponentFixture<AddcalendarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcalendarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcalendarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
