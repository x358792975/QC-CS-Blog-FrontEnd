import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumInBodyPostThreadComponent } from './forum-in-body-post-thread.component';

describe('ForumInBodyPostThreadComponent', () => {
  let component: ForumInBodyPostThreadComponent;
  let fixture: ComponentFixture<ForumInBodyPostThreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumInBodyPostThreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumInBodyPostThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
