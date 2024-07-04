import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent, 
    UserComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

