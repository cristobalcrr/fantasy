import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Storage } from '@ionic/storage-angular';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    const storageStub = {
      create: async () => {}
      // Puedes añadir más métodos o propiedades del Storage que tu servicio AuthService necesite usar en los tests
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Storage, useValue: storageStub }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});