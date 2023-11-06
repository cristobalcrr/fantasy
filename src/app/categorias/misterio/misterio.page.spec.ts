import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MISTERIOPage } from './misterio.page';

describe('MISTERIOPage', () => {
  let component: MISTERIOPage;
  let fixture: ComponentFixture<MISTERIOPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MISTERIOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
