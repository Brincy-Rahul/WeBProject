import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserstoryComponent } from './create-userstory.component';

describe('CreateUserstoryComponent', () => {
  let component: CreateUserstoryComponent;
  let fixture: ComponentFixture<CreateUserstoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserstoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserstoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
