import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaComponent } from '../entrada/entrada.component';



@Component({
  selector: 'app-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.css']
})
export class Panel1Component  {
private clicked1 = true;
private clicked2= true;
private clicked3= true;
private clicked4= true;
  constructor(private router: Router ) {
   }


  
    public otra(){

    this.router.navigate(['/profile-nefro']);
}
  //Boton 1 consentimiento
    actionMethod1(){
      console.log (this.clicked1);

      //Boton 1 consentimiento
      if(this.clicked1 === true){
        document.getElementById("boton1Cons").style.backgroundColor ="#9791E5";
        this.clicked1 = false;
      } else {
         document.getElementById("boton1Cons").style.backgroundColor = "#4E44C1";
         this.clicked1 = true;
      }
    }

  //Boton 2 consentimiento
     actionMethod2(){
         console.log (this.clicked2);

        if(this.clicked2 === true){
        document.getElementById("boton1Cons2").style.backgroundColor ="#9791E5";
        this.clicked2 = false;
      } else {
         document.getElementById("boton1Cons2").style.backgroundColor = "#4E44C1";
         this.clicked2 = true;
      }
     }
 //Boton 3 consentimiento
    actionMethod3(){
      console.log (this.clicked3);

         if(this.clicked3 === true){
        document.getElementById("boton1Cons3").style.backgroundColor ="#9791E5";
        this.clicked3 = false;
      } else {
         document.getElementById("boton1Cons3").style.backgroundColor = "#4E44C1";
         this.clicked3 = true;
      }
 }
 //Boton 4 consentimiento
      
      actionMethod4(){
        console.log (this.clicked4);

         if(this.clicked4 === true){
        document.getElementById("boton1Cons4").style.backgroundColor ="#9791E5";
        this.clicked4 = false;
      } else {
         document.getElementById("boton1Cons4").style.backgroundColor = "#4E44C1";
         this.clicked4 = true;
      }
      }

    

}