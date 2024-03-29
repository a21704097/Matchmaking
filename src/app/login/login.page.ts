import { Component, OnInit } from '@angular/core';
import {FireAuthService} from '../fire-auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public validationsForm: FormGroup;
  public errorMessage = '';
  public validationMessages = {
    email: [
      {type: 'required', message: 'Email is required.'},
      {type: 'pattern', message: 'Please enter a valid email.'}
    ],
    password: [
      {type: 'required', message: 'Password is required.'},
      {type: 'minlength', message: 'Password must be at least 6 characters long.'}
    ]
  };
  constructor(
      private authService: FireAuthService,
      private formBuilder: FormBuilder,
      private router: Router
  ) {
  }
  public ngOnInit(): void {
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }
  public async tryLogin(value: { email: string, password: string }): Promise<void> {
    return await this.authService.doLogin(value)
        .then(res => {
          this.router.navigateByUrl('/home');
        }, err => {
          this.errorMessage = err.message;
          console.log(err);
        });
  }
  public goRegisterPage(): void {
    this.router.navigate(['/registar']);
  }


}
