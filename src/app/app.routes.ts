import { RouterModule, Routes } from '@angular/router';
import { Panel1Component } from './component/panel1/panel1.component';
import { ConsentimientoComponent } from './component/consentimiento/consentimiento.component';
import { EncuestaComponent } from './component/encuesta/encuesta.component';
import { ProfileComponent } from './component/profile/profile.component';
import {AuthGuard } from './auth.guard';
import { ProfileNefroComponent } from './component/profile-nefro/profile-nefro.component';


const APP_ROUTES: Routes = [
  { path: 'investigadoras', component: Panel1Component },
  { path: 'consentimiento', component:ConsentimientoComponent },
   { path: 'encuesta', component: EncuestaComponent },
   { path: 'paco', component:ProfileNefroComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
     { path: 'profile-nefro', component: ProfileNefroComponent, canActivate: [AuthGuard] },
     
     
   

 { path: '**', pathMatch: 'full', redirectTo: 'investigadoras' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
