import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css'],
  providers: [AuthService]
})
export class WellcomeComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.check();
  }

}
