import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeofencesListComponent } from './geofences-list.component';

describe('GeofencesListComponent', () => {
  let component: GeofencesListComponent;
  let fixture: ComponentFixture<GeofencesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeofencesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeofencesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
