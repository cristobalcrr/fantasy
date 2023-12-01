import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MISTERIOPage } from './misterio.page';
import { HttpClientModule } from '@angular/common/http';

describe('MISTERIOPage', () => {
  let component: MISTERIOPage;
  let fixture: ComponentFixture<MISTERIOPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MISTERIOPage],
      imports: [IonicModule.forRoot(), HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MISTERIOPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});