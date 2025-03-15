import { Component, computed, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-layout',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterModule,
    CommonModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {


  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {
  }
  get isLoggedIn(): Boolean {
    return this.loginService.isLoggedIn();
    
  }
  logout() {
    this.loginService.logout()
  }
}
