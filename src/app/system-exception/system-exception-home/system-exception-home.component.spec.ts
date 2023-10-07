import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemExceptionHomeComponent } from './system-exception-home.component';

describe('SystemExceptionHomeComponent', () => {
  let component: SystemExceptionHomeComponent;
  let fixture: ComponentFixture<SystemExceptionHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemExceptionHomeComponent]
    });
    fixture = TestBed.createComponent(SystemExceptionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
