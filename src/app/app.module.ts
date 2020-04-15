import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieLawModule } from 'angular2-cookie-law';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Rutas
import { APP_ROUTING } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CabeceraComponent } from './component/cabecera/cabecera.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { Panel1Component } from './component/panel1/panel1.component';
import { EncuestaComponent } from './component/encuesta/encuesta.component';
import { AuthService } from './auth.service';
import {AuthGuard } from './auth.guard';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileNefroComponent } from './component/profile-nefro/profile-nefro.component';
import { FirebaseService } from './firebase.service';





@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_ROUTING,RouterModule,HttpClientModule,ReactiveFormsModule,NgbModule,CookieLawModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, CabeceraComponent, BodyComponent, FooterComponent, Panel1Component, EncuestaComponent, ProfileComponent, ProfileNefroComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService,AuthGuard, FirebaseService]
})
export class AppModule { }
