import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from './categoria.service';

describe('CategoriaService', () => {
  let service: ProductServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Importa el HttpClientModule
      providers: [ProductServiceService], // Agrega el servicio al array de providers si no está en los providers del módulo
    });
    service = TestBed.inject(ProductServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});