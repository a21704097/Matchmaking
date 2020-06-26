import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgModel, Validators} from '@angular/forms';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';
import { UsersService } from '../servicos/users.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.page.html',
  styleUrls: ['./registar.page.scss'],
})
export class RegistarPage implements OnInit {

  user: User = {nome: '', apelido: '', email: '', tipo: '', dob: null};

  constructor(
      private authService: FireAuthService,
      private formBuilder: FormBuilder,
      private router: Router,
      private users: UsersService
      
  ) {}
  public validationsForm: FormGroup;
  public errorMessage = '';
  public successMessage = '';
  year = null;
  currentTime = null;
  public validationMessages = {
    email: [
      {type: 'required', message: 'Email necessário.'},
      {type: 'pattern', message: 'Insira um email válido.'}
    ],
    password: [
      {type: 'required', message: 'Password necessária.'},
      {type: 'minlength', message: 'Password deve ter no mínimo 6 caracteres.'}
    ]
  };

  static passwordsMatch(cg: FormGroup) {
    const password = cg.get('password');
    const confirmPassword = cg.get('confirmPassword');
    const rv: {[error: string]: any} = {};
    if ((password.touched || confirmPassword.touched) && password.value !== confirmPassword.value) {
      rv['Passwords diferentes'] = true;
    }
    return rv;
}
  public ngOnInit(): void {
    
    this.validationsForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      nome: ['', Validators.required],
      apelido: ['', Validators.required],
      email: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      dob: [null, Validators.compose([Validators.required])],
      password: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required])),
      confirmPassword: [Validators.required],
  },
        {Validators: RegistarPage.passwordsMatch});
  }
  public tryRegister(value: { nome: string, apelido: string, email: string, password: string, tipo: string, dob: Date}): void {
    this.authService.doRegister(value).then(res => {
      
      this.user.nome = value.nome;
      this.user.apelido = value.apelido;
      this.user.email = value.email;
      this.user.tipo = value.tipo;
      this.user.dob = value.dob;
      
      this.users.addUser(this.user);
      console.log(res);
      this.errorMessage = '';
      this.successMessage = 'Conta criada! Faça Login.';
      
      }, 
        err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
      });
  }
  public goLoginPage(): void {
    this.router.navigate(['/login']);
  }
  
}
