import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FANTASIAPage } from './fantasia.page';

describe('FANTASIAPage', () => {
  let component: FANTASIAPage;
  let fixture: ComponentFixture<FANTASIAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FANTASIAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
