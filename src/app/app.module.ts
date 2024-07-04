import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';


import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent, 
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

