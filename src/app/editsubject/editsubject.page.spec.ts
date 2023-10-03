import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditsubjectPage } from './editsubject.page';

describe('EditsubjectPage', () => {
  let component: EditsubjectPage;
  let fixture: ComponentFixture<EditsubjectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditsubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
