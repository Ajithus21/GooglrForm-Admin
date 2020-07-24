import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { SubmittedFormComponent } from './submitted-form/submitted-form.component';

@NgModule({
	declarations: [ AppComponent, HomeComponent, CreateFormComponent, NavbarComponent, NextpageComponent, LoginComponent, FormComponent, SubmittedFormComponent ],
	imports: [ BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
