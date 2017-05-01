import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from 'app/models/user.interface';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }
  getUsers(){
    let url = './assets/data/info.json';
    return this.http.get(url)
    .toPromise()
    .then(response => response.json())
    .catch(this.error);
  }

  getUsersSlow(): Promise<User[]>{
    return new Promise<User[]>(
      resolve => setTimeout(resolve, 5000)
    ).then(()=>this.getUsers())
  }

  getUser(username: string){
    return this.getUsers()
      .then( users => users.find(user => user.username == username));
  }

  error(error: any){
    return Promise.reject(error.message || error)
  }
}
