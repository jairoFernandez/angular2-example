import { Injectable } from '@angular/core';
import { User } from 'app/models/user.interface';
@Injectable()
export class UserService {
  private _users: any;
  constructor() { 
    this._users = {};
  }

  getUsers(){
    return this._users;
  }

  addUsers(user: User){
    if(!this._users[user.username]){
      this._users[user.username] = {
        name: user.name,
        username: user.username,
        age: user.age,
        urlPhoto: user.urlPhoto,
        password: user.password
      }
    }else{
      console.log("El usuario " + user.username + " ya existe");
    }
  }
}
