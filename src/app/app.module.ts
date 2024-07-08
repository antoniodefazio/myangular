import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';


import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConditionalInterceptor } from './condauth.interceptor';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';



@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ConditionalInterceptor, multi: true }
  ],
  declarations: [
    AppComponent,
    UserComponent,
    ContactFormComponent,
    ReusableTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

