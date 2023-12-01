import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FANTASIAPage } from './fantasia.page';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

describe('FANTASIAPage', () => {
  let component: FANTASIAPage;
  let fixture: ComponentFixture<FANTASIAPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [FANTASIAPage],
      imports: [HttpClientModule] // Asegúrate de importar HttpClientModule aquí
    })
    .compileComponents();

    fixture = TestBed.createComponent(FANTASIAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});