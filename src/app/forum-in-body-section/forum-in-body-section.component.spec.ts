import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumInBodySectionComponent } from './forum-in-body-section.component';

describe('ForumInBodySectionComponent', () => {
  let component: ForumInBodySectionComponent;
  let fixture: ComponentFixture<ForumInBodySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumInBodySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumInBodySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
