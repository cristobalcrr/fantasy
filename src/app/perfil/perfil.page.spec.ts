import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PerfilPage } from './perfil.page';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

// Stub para AuthService
class AuthServiceStub {}

// Stub para HttpClient
class HttpClientStub {}

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: HttpClient, useClass: HttpClientStub } // Provee HttpClientStub
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});