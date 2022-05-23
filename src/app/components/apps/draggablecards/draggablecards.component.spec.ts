import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggablecardsComponent } from './draggablecards.component';

describe('DraggablecardsComponent', () => {
  let component: DraggablecardsComponent;
  let fixture: ComponentFixture<DraggablecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggablecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggablecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
