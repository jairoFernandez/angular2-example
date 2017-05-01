import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiObservableService {

  constructor(
    private http: Http
  ) { }

  getUsers(){
    const url = './assets/data/info.json';
    return this.http.get(url)
    .map(
      (response: Response) => response.json() 
    )
  }
}
