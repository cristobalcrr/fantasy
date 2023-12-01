import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './my-guard.guard';
import { AuthService } from './auth.service';
import { IonicStorageModule } from '@ionic/storage-angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('MyGuardGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        IonicStorageModule.forRoot() // Asegúrate de incluir IonicStorageModule.forRoot() aquí si es necesario
      ],
      providers: [
        AuthGuard,
        AuthService // Asegúrate de incluir AuthService si es necesario para AuthGuard
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});