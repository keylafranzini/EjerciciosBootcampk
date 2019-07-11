import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabItemsComponent } from './tab-items.component';

describe('TabItemsComponent', () => {
  let component: TabItemsComponent;
  let fixture: ComponentFixture<TabItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
