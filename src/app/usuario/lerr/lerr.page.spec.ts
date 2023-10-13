import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LerrPage } from './lerr.page';

describe('LerrPage', () => {
  let component: LerrPage;
  let fixture: ComponentFixture<LerrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LerrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
