import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { COMEDIAPage } from './comedia.page';

describe('COMEDIAPage', () => {
  let component: COMEDIAPage;
  let fixture: ComponentFixture<COMEDIAPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [COMEDIAPage],
      imports: [HttpClientModule], // Agrega HttpClientModule para HttpClient
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COMEDIAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});