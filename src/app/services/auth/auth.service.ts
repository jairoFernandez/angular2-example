import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  user: AUser[] = USERS;
  session: boolean = false;

  constructor(private router: Router) { }

  login(user: AUser) {
    let user_ext = this.user.find(u => u.email == user.email);
    if (user_ext && user_ext.password == user.password) {
      localStorage.setItem("user", JSON.stringify(user_ext));
      this.session = true;
      let link = ['/'];
      this.router.navigate(link);
    }
  }

  logout() {
    this.session = false;
    localStorage.removeItem("user");
    this.redirect();
  }

  redirect() {
    let link = ["/login"];
    this.router.navigate(link);
  }

  check(){
    if(localStorage.getItem("user") == null){
      this.session = false;
      this.redirect();
    }else{
      this.session = true;
    }
  }

  getSession(){
    return this.session;
  }

  getUser(){
    return localStorage.getItem("user");
  }
}

export interface AUser {
  email: string,
  password: string
}

const USERS: AUser[] = [
  {
    email: 'jairo@hotmail.com',
    password: '123456'
  },
  {
    email: 'nata@hotmail.com',
    password: '1234'
  }
]
