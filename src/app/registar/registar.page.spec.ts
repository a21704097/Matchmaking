import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistarPage } from './registar.page';

describe('RegisterPage', () => {
  let component: RegistarPage;
  let fixture: ComponentFixture<RegistarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
