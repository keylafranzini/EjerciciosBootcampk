import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaOtraComponent } from './noticia-otra.component';

describe('NoticiaOtraComponent', () => {
  let component: NoticiaOtraComponent;
  let fixture: ComponentFixture<NoticiaOtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaOtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaOtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
