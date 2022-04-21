import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllAuthorsComponent } from './show-all-authors.component';

describe('ShowAllAuthorsComponent', () => {
  let component: ShowAllAuthorsComponent;
  let fixture: ComponentFixture<ShowAllAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
