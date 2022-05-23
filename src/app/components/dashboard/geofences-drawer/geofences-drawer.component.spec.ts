import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofencesDrawerComponent } from './geofences-drawer.component';

describe('GeofencesDrawerComponent', () => {
  let component: GeofencesDrawerComponent;
  let fixture: ComponentFixture<GeofencesDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeofencesDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofencesDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
