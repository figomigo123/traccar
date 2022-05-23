import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermmissionsComponent } from './Permmissions.component';

describe('NotificationsComponent', () => {
  let component: PermmissionsComponent;
  let fixture: ComponentFixture<PermmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
