import { RouterModule, Routes } from '@angular/router';

import { Panel1Component } from './component/panel1/panel1.component';
import { Panel2Component } from './component/panel2/panel2.component';
import { ConsentimientoComponent } from './component/consentimiento/consentimiento.component';
import { EncuestaComponent } from './component/encuesta/encuesta.component';
import { ProfileComponent } from './component/profile/profile.component';
import {AuthGuard } from './auth.guard';


const APP_ROUTES: Routes = [
  { path: 'investigadoras', component: Panel1Component },
  { path: 'instrucciones', component: Panel2Component },
  { path: 'consentimiento', component:ConsentimientoComponent },
   { path: 'encuesta', component: EncuestaComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
 },
     
     
     
   

 { path: '**', pathMatch: 'full', redirectTo: 'investigadoras' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
