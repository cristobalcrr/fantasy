import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ROMANCEPage } from './romance.page';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

describe('ROMANCEPage', () => {
  let component: ROMANCEPage;
  let fixture: ComponentFixture<ROMANCEPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ROMANCEPage],
      imports: [HttpClientModule] // Asegúrate de importar HttpClientModule aquí
    })
    .compileComponents();

    fixture = TestBed.createComponent(ROMANCEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});