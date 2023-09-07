import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFountPage } from './not-fount.page';

describe('NotFountPage', () => {
  let component: NotFountPage;
  let fixture: ComponentFixture<NotFountPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotFountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
