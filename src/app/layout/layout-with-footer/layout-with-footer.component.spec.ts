import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithFooterComponent } from './layout-with-footer.component';

describe('LayoutWithFooterComponent', () => {
  let component: LayoutWithFooterComponent;
  let fixture: ComponentFixture<LayoutWithFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWithFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
