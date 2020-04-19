import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaComponent } from '../entrada/entrada.component';



@Component({
  selector: 'app-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.css']
})
export class Panel1Component  {


  constructor(private router: Router ) {
   }


  
    public otra(){

    this.router.navigate(['/profile-nefro']);
}

}