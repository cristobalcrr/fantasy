import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { AuthService } from '../auth.service';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let authServiceStub: Partial<AuthService>;

  beforeEach(async () => {
    authServiceStub = {
      // Aquí puedes proporcionar métodos falsos o mock de AuthService si es necesario para la prueba
    };

    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: AuthService, useValue: authServiceStub },
        // Proveedor falso o mock de Storage para evitar el error de NullInjectorError
        {
          provide: Storage,
          useValue: {
            get: () => null,
            set: () => null,
            // Agrega métodos o propiedades adicionales según sea necesario para tu prueba
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});