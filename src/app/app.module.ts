import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NuevoComponent } from './features/nuevo/nuevo.component';
import { UserBoxComponent } from './features/user-box/user-box.component';
import { VotationUserComponent } from './features/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    UserBoxComponent,
    VotationUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
