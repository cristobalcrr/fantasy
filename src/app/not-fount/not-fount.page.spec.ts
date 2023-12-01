import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NotFountPage } from './not-fount.page'; // Asumiendo que es 'not-found.page'
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

describe('NotFoundPage', () => {
  let component: NotFountPage;
  let fixture: ComponentFixture<NotFountPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NotFountPage],
      imports: [HttpClientModule], // Agrega HttpClientModule en imports
    }).compileComponents();

    fixture = TestBed.createComponent(NotFountPage);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})