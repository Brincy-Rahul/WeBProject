import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserstoryComponent } from './view-userstory.component';

describe('ViewUserstoryComponent', () => {
  let component: ViewUserstoryComponent;
  let fixture: ComponentFixture<ViewUserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
