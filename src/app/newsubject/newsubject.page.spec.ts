import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsubjectPage } from './newsubject.page';

describe('NewsubjectPage', () => {
  let component: NewsubjectPage;
  let fixture: ComponentFixture<NewsubjectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
