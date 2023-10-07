import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexlayoutComponent } from './flexlayout.component';

describe('FlexlayoutComponent', () => {
  let component: FlexlayoutComponent;
  let fixture: ComponentFixture<FlexlayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexlayoutComponent]
    });
    fixture = TestBed.createComponent(FlexlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
