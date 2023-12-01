import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductListPage } from './product-list.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';

describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListPage],
      imports: [HttpClientModule], // Agrega HttpClientModule
      providers: [ProductServiceService],
    }).compileComponents().catch(error => {
      console.error('Error en la compilación de componentes:', error);
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});