import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorSectionComponent } from './creator-section.component';

describe('CreatorSectionComponent', () => {
  let component: CreatorSectionComponent;
  let fixture: ComponentFixture<CreatorSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
