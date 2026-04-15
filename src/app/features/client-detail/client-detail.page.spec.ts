import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ClientDetailPage } from './client-detail.page';
import { provideRouter } from '@angular/router';

describe('ClientDetailPage', () => {
  let component: ClientDetailPage;
  let fixture: ComponentFixture<ClientDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(), ClientDetailPage],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(ClientDetailPage);
    component = fixture.componentInstance;
    component.client = { name: 'Cliente de Prueba', email: 'test@ejemplo.com' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
