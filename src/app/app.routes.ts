import { RouterModule, Routes } from '@angular/router';
import { Panel1Component } from './component/panel1/panel1.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ProfileNefroComponent } from './component/profile-nefro/profile-nefro.component';
import { PaginaFinalComponent } from './component/pagina-final/pagina-final.component';
import { FooterComponent } from './component/footer/footer.component';
import { EntradaComponent } from './component/entrada/entrada.component';




const APP_ROUTES: Routes = [
  { path: 'investigadoras', component: Panel1Component },
   { path: 'paco', component:ProfileNefroComponent },
   { path: 'pagina-final', component:PaginaFinalComponent },
    { path: 'profile', component: ProfileComponent },
     { path: 'profile-nefro', component: ProfileNefroComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'entrada', component: EntradaComponent },
  
     
     
   

 { path: '**', pathMatch: 'full', redirectTo: 'investigadoras' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
