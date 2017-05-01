import { Component, OnInit } from '@angular/core';
import { NuevoComponent} from './features/nuevo/nuevo.component';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  user: boolean;
  title = 'Bienvenidos!';

  constructor(private auth: AuthService){

  }

  ngOnInit(){

  }

  logout(){
    this.auth.logout();
  }
}
