import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { ProductDetailPage } from './product-detail.page';
import { ProductServiceService } from '../product-service.service';

describe('ProductDetailPage', () => {
  let component: ProductDetailPage;
  let fixture: ComponentFixture<ProductDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailPage],
      imports: [HttpClientModule], // Asegúrate de importar HttpClientModule aquí
      providers: [
        ProductServiceService, // Asegúrate de proporcionar el servicio necesario
        {
          provide: ActivatedRoute, // Proporciona ActivatedRoute
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'test_id' // Simula un parámetro de ruta
              }
            }
          }
        }
      ]
    }).compileComponents().catch(error => {
      console.error('Error en la compilación de componentes:', error);
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});