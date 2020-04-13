import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";



@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent  {
datos:any[]=[];
cubierto: boolean;
checkoutForm: any;

  zona: any[]=[
    {id:"1", comunidad:"Andalucía "},
    {id:"2", comunidad:"Aragón "},
    {id:"3", comunidad:"Asturias "},
    {id:"4", comunidad:"Baleares "},
    {id:"5", comunidad:"Canarias "},
    {id:"6", comunidad:"Cantabria "},
    {id:"7", comunidad:"Castilla-La Mancha "},
    {id:"8", comunidad:"Castilla y León "},
    {id:"9", comunidad:"Cataluña "},
    {id:"10", comunidad:"Extramadura "},
    {id:"11", comunidad:"Galicia "},
    {id:"12", comunidad:"La Rioja "},
    {id:"13", comunidad:"Madrid "},
    {id:"14", comunidad:"Murcia "},
    {id:"15", comunidad:"Navarra "},
    {id:"16", comunidad:"Pais Vasco "},
    {id:"17", comunidad:"Comunidad Valenciana "}
  ];

ocupaciones: any[]=[
    {id:"1", name:"Nefrólogo/a "},
    {id:"2", name:"Enfermero/a "},
    {id:"3", name:"Auxiliar de enfermería "},
    {id:"4", name:"Personal de limpieza "},
    {id:"5", name:"Mantenimiento "},
    {id:"6", name:"Seguridad "}


];







  constructor(
    private formBuilder: FormBuilder,
    private router:Router) { 
 this.checkoutForm = this.formBuilder.group({
   zonas:'',
   ocupacion:'',


  

    });




    }

  
  onSubmit(customerData) {
  console.log ( customerData.zonas);
  console.warn('Your order has been submitted', customerData);
    //this.router.navigate(['presentacion',customerData]);


  }
  

}