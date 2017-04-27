import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  constructor(private UserService : UserService) { }

  ngOnInit() {
    this.users = this.UserService.getUsers();
  }

}
