import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserLoginDto } from '../../interfaces/user';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) { }
  login(): void {
    const userLogin: UserLoginDto = {
      username: this.username,
      password: this.password
    }
    console.log(userLogin);
    this.loginService.login(userLogin).subscribe({
      next: () => {
        this.router.navigate(['/products']);
      },
      error: (err) => {
        alert(err.message)
      }
    })
  }
}
