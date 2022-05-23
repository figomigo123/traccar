import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgoefencesComponent } from './addgoefences.component';

describe('AddgoefencesComponent', () => {
  let component: AddgoefencesComponent;
  let fixture: ComponentFixture<AddgoefencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgoefencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgoefencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
