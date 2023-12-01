import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductAddPage } from './product-add.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddPage],
      imports: [ReactiveFormsModule, HttpClientModule] // Asegúrate de importar los módulos necesarios
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});