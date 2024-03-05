import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborCardComponent } from './labor-card.component';

describe('LaborCardComponent', () => {
  let component: LaborCardComponent;
  let fixture: ComponentFixture<LaborCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaborCardComponent]
    });
    fixture = TestBed.createComponent(LaborCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
