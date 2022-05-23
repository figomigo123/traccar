import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommandsComponent } from './addcommands.component';

describe('AddcommandsComponent', () => {
  let component: AddcommandsComponent;
  let fixture: ComponentFixture<AddcommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
