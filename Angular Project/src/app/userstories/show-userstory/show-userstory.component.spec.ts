import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUserstoryComponent } from './show-userstory.component';

describe('ShowUserstoryComponent', () => {
  let component: ShowUserstoryComponent;
  let fixture: ComponentFixture<ShowUserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
