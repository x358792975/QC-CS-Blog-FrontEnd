import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumInBodyPostListComponent } from './forum-in-body-post-list.component';

describe('ForumInBodyPostListComponent', () => {
  let component: ForumInBodyPostListComponent;
  let fixture: ComponentFixture<ForumInBodyPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumInBodyPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumInBodyPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
