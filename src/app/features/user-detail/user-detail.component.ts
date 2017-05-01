import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'app/models/user.interface';
import { ApiService } from 'app/services/api/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [ ApiService ]
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apiservice: ApiService

  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params ) => {
        let username = params['username'];
        this.apiservice.getUser(username.toString())
          .then( user => this.user = user );

    } )
  }

}
