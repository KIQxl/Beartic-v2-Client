import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginService } from '../../services/LoginService';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private loginService: loginService, private router: Router) {}
  public username: string = "";
  public password: string = "";

  login() : void{
    this.loginService.login(this.username, this.password)
      .subscribe(
        login => {
          sessionStorage.setItem('user', JSON.stringify(login));
          this.router.navigate(['/home'])
        },
        error => {
          	console.log(error);
        }
      );

  }
}
