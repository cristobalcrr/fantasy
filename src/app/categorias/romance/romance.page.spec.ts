import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ROMANCEPage } from './romance.page';

describe('ROMANCEPage', () => {
  let component: ROMANCEPage;
  let fixture: ComponentFixture<ROMANCEPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ROMANCEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
