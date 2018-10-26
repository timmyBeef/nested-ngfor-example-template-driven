import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNgforTemplateDrivenComponent } from './nested-ngfor-template-driven.component';

describe('NestedNgforTemplateDrivenComponent', () => {
  let component: NestedNgforTemplateDrivenComponent;
  let fixture: ComponentFixture<NestedNgforTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedNgforTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedNgforTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
