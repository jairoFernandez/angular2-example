import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.css']
})
export class UserBoxComponent implements OnInit {
  /* Variable de entrada, señalada en la vista donde se implementa, así [usuario]*/
  @Input()
  usuario: User;

  constructor() { }

  ngOnInit() {
  }

}
