import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { AuthService } from '../auth.service';
describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;
  let authService: AuthService; // Declara una variable para el servicio AuthService

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      // Aquí puedes agregar otros módulos, servicios y configuraciones necesarias
      // para la prueba de RegistroPage
      providers: [
        {
          provide: AuthService,
          useValue: {
            // Proporciona un mock válido para el AuthService
            // Puedes agregar métodos y propiedades necesarios para esta prueba
            // También puedes usar jasmine.createSpyObj u otros métodos para crear el mock
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService); // Obtiene la instancia del servicio AuthService
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});