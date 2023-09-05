import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegPagoPage } from './reg-pago.page';

describe('RegPagoPage', () => {
  let component: RegPagoPage;
  let fixture: ComponentFixture<RegPagoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
