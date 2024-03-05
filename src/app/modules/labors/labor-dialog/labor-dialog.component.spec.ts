import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborDialogComponent } from './labor-dialog.component';

describe('LaborDialogComponent', () => {
  let component: LaborDialogComponent;
  let fixture: ComponentFixture<LaborDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaborDialogComponent]
    });
    fixture = TestBed.createComponent(LaborDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
