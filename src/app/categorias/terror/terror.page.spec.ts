import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TERRORPage } from './terror.page'; // Asegúrate de que la ruta sea correcta

describe('TERRORPage', () => {
  let component: TERRORPage;
  let fixture: ComponentFixture<TERRORPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TERRORPage],
      imports: [HttpClientTestingModule] // Importa HttpClientModule o HttpClientTestingModule
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TERRORPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});