import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PqfiHomeComponent } from './pqfi-home.component';

describe('PqfiHomeComponent', () => {
  let component: PqfiHomeComponent;
  let fixture: ComponentFixture<PqfiHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PqfiHomeComponent]
    });
    fixture = TestBed.createComponent(PqfiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
