import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.interface';
import { UserBoxComponent } from '../user-box/user-box.component';

const USUARIOS: User[] = [
  {
    name: "Pepito Pérez",
    password: "123456",
    username: "pepito",
    age: 30,
    urlPhoto: "https://s-media-cache-ak0.pinimg.com/736x/ec/b8/67/ecb867283a30f334f40d11de551f5f36.jpg"
  },
  {
    name: "Juan Pérez",
    password: "q34edasdas",
    username: "jaunito",
    age: 25,
    urlPhoto: "https://s-media-cache-ak0.pinimg.com/736x/28/8b/88/288b885abd2e62dbf99e6b2df9780d52.jpg"
  },
  {
    name: "Mathi Fernández",
    password: "asdasdaisud9as",
    username: "mathi",
    age: 2,
    urlPhoto: "http://img4.zergnet.com/1642443_300.jpg"
  }
];

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  
  miVariable: string = "Texto de mi variable!!";
  usuarios: User[] = USUARIOS;

  constructor() { }

  ngOnInit() {
  }

}
