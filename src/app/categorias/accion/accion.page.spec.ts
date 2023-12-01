import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ACCIONPage } from './accion.page';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from '../categoria.service';

describe('ACCIONPage', () => {
  let component: ACCIONPage;
  let fixture: ComponentFixture<ACCIONPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ACCIONPage],
      imports: [HttpClientModule],
      providers: [ProductServiceService],
    }).compileComponents().catch(error => {
      console.error('Error en la compilación de componentes:', error);
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACCIONPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});