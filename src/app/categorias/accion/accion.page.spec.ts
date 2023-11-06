import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ACCIONPage } from './accion.page';

describe('ACCIONPage', () => {
  let component: ACCIONPage;
  let fixture: ComponentFixture<ACCIONPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ACCIONPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
