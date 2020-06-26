import { Component, OnInit } from '@angular/core';
import {FireAuthService} from '../fire-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private authService: FireAuthService, private router: Router) {
  }
  ngOnInit() {
  }

  public logout(): void {
    this.authService.doLogout().then(() =>
        this.router.navigate(['/login']), err => console.log(err));
  }

  public goChat(){
    this.router.navigate(['/chat']);
  }
}
