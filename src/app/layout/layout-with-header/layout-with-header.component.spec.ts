import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWithHeaderComponent } from './layout-with-header.component';

describe('LayoutWithHeaderComponent', () => {
  let component: LayoutWithHeaderComponent;
  let fixture: ComponentFixture<LayoutWithHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutWithHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutWithHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
