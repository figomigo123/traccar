import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceStatusModalComponent } from './device-status-modal.component';

describe('DeviceStatusModalComponent', () => {
  let component: DeviceStatusModalComponent;
  let fixture: ComponentFixture<DeviceStatusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceStatusModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceStatusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
