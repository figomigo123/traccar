import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstatisticsComponent } from './addstatistics.component';

describe('AddstatisticsComponent', () => {
  let component: AddstatisticsComponent;
  let fixture: ComponentFixture<AddstatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
