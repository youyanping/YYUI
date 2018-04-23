import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatePageComponent } from './animate-page.component';

describe('AnimatePageComponent', () => {
  let component: AnimatePageComponent;
  let fixture: ComponentFixture<AnimatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
