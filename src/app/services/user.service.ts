import { Injectable } from '@angular/core';
import { User } from 'app/models/user.interface';

@Injectable()
export class UserService {
  private _users: any;
  private _votation: any = { total: 0 };

  constructor() { 
    this._users = {};
  }

  getUsers(){
    return this._users;
  }

  getVotation(){
    return this._votation;
  }

  addUsers(user: User){
    if(!this._users[user.username]){
      this._users[user.username] = {
        quantity: 1,
        name: user.name,
        username: user.username,
        age: user.age,
        urlPhoto: user.urlPhoto,
        password: user.password
      }
    }else{
      this._users[user.username].quantity += 1;
    }    
    this._votation.total += 1;
  }
}
