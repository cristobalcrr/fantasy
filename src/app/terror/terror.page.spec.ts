import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TERRORPage } from './terror.page';

describe('TERRORPage', () => {
  let component: TERRORPage;
  let fixture: ComponentFixture<TERRORPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TERRORPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
