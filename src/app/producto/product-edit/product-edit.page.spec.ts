import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductEditPage } from './product-edit.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductEditPage', () => {
  let component: ProductEditPage;
  let fixture: ComponentFixture<ProductEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductEditPage],
      imports: [HttpClientModule],
      providers: [
        ProductServiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => 'mocked_id'
              }
            }
          }
        }
      ],
    }).compileComponents().catch(error => {
      console.error('Error en la compilación de componentes:', error);
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});