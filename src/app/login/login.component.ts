import { Component, OnInit } from '@angular/core';
import { AUser, AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  user: AUser;
  error: string;

  constructor(private auth: AuthService) { 
    this.user = {email: null, password: null}
  }

  ngOnInit() {
  }

  login(){
    if(!this.auth.login(this.user)){
      this.error = "Error de autenticación";
    }
  }
}
