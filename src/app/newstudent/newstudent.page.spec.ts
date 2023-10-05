import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewstudentPage } from './newstudent.page';

describe('NewstudentPage', () => {
  let component: NewstudentPage;
  let fixture: ComponentFixture<NewstudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
