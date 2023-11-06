import { ComponentFixture, TestBed } from '@angular/core/testing';
import { COMEDIAPage } from './comedia.page';

describe('COMEDIAPage', () => {
  let component: COMEDIAPage;
  let fixture: ComponentFixture<COMEDIAPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(COMEDIAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
