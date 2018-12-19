import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumBodyComponent } from './forum-body.component';

describe('ForumBodyComponent', () => {
  let component: ForumBodyComponent;
  let fixture: ComponentFixture<ForumBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
