import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NuevoComponent } from './features/nuevo/nuevo.component';
import { UserBoxComponent } from './features/user-box/user-box.component';
import { VotationUserComponent } from './features/user/user.component';
import { UserDetailComponent } from './features/user-detail/user-detail.component';
import { WellcomeComponent } from './features/wellcome/wellcome.component';
import { LoginComponent } from './login/login.component';

const routes = [
  {
    path: '',
    component: WellcomeComponent
  },
  {
    path: 'users',
    component: NuevoComponent
  },
  {
    path: 'user/:username',
    component: UserDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    UserBoxComponent,
    VotationUserComponent,
    UserDetailComponent,
    WellcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
