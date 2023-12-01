import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistroFotoPage } from './registro-foto.page';

describe('RegistroFotoPage', () => {
  let component: RegistroFotoPage;
  let fixture: ComponentFixture<RegistroFotoPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(RegistroFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
