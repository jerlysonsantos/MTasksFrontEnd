import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborsComponent } from './labors.component';

describe('LaborsComponent', () => {
  let component: LaborsComponent;
  let fixture: ComponentFixture<LaborsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaborsComponent]
    });
    fixture = TestBed.createComponent(LaborsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
