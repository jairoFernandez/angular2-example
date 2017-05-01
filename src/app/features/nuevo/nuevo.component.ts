import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.interface';
import { UserBoxComponent } from '../user-box/user-box.component';
import { UserService } from '../../services/user.service';
import { VotationUserComponent } from '../user/user.component';
import { ApiService } from '../../services/api/api.service';
import { AuthService } from 'app/services/auth/auth.service';

import { ApiObservableService } from '../../services/api/api-observable.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css'],
  providers: [ApiService, UserService, AuthService, ApiObservableService]
})
export class NuevoComponent implements OnInit {
  
  miVariable: string = "Texto de mi variable!!";
  usuarios: User[] ;

  constructor(
    private apiservice: ApiService, 
    private auth: AuthService, 
    private apiobservable: ApiObservableService) { }

  ngOnInit() {
    this.auth.check();
    this.getUSers();
  }

  getUSers(){
   /* this.apiservice.getUsers().then(
      usuarios => this.usuarios = usuarios
    );*/
    this.apiobservable.getUsers().subscribe(
      data => { this.usuarios = data },
      error => console.log(error)
    );
  }

  ObtenerSalidaComponente(event){
    console.log("Recibido " + JSON.stringify(event));
  }
}
