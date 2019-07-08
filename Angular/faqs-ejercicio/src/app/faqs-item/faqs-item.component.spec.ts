import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsItemComponent } from './faqs-item.component';

describe('FaqsItemComponent', () => {
  let component: FaqsItemComponent;
  let fixture: ComponentFixture<FaqsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
