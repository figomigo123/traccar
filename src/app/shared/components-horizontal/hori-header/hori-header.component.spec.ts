import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoriHeaderComponent } from './hori-header.component';

describe('HoriHeaderComponent', () => {
  let component: HoriHeaderComponent;
  let fixture: ComponentFixture<HoriHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoriHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoriHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
