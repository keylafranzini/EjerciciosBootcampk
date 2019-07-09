import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabArrowComponent } from './tab-arrow.component';

describe('TabArrowComponent', () => {
  let component: TabArrowComponent;
  let fixture: ComponentFixture<TabArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
