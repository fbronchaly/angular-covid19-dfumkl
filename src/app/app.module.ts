import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CabeceraComponent } from './component/cabecera/cabecera.component';
import { BodyComponent } from './component/body/body.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Panel1Component } from './component/panel1/panel1.component';
import { Panel2Component } from './component/panel2/panel2.component';
import { ConsentimientoComponent } from './component/consentimiento/consentimiento.component';
import { EncuestaComponent } from './component/encuesta/encuesta.component';
import { AuthService } from './auth.service';
import {AuthGuard } from './auth.guard';
import { ProfileComponent } from './component/profile/profile.component';





@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_ROUTING,RouterModule,HttpClientModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, CabeceraComponent, BodyComponent, FooterComponent, NavbarComponent, Panel1Component, Panel2Component, ConsentimientoComponent, EncuestaComponent, ProfileComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService,AuthGuard]
})
export class AppModule { }
