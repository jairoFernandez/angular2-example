import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.interface';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  /* Variable de entrada, señalada en la vista donde se implementa, así [usuario]*/
  @Input()
  usuario: User;

  @Output()
  salida = new EventEmitter();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  GuardarVotacion(user: User){
    this.userService.addUsers(user);
    this.salida.emit(this.usuario);
  }

  goToDetail(user: User){
    let link = ['/user', user.username];
    this.router.navigate(link);
  }

}
