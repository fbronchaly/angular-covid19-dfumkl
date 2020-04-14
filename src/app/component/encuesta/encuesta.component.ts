import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent  {
datos:any[]=[];
cubierto: boolean;
checkoutForm: any;

  

ocupaciones: any[]=[
    {id:"1", name:"Adjunto/a "},
    {id:"2", name:"Residente "},
    {id:"3", name:"Estudiante "},
    {id:"4", name:"Emfermero/a "},
    {id:"5", name:"Auxiliar de enfermería "},
    {id:"6", name:"Camillero "},
    {id:"7", name:"Personal administrativo "},
    {id:"8", name:"Personal de mantenimiento "},
    {id:"9", name:"Personal directivo "},
];

genero: any[]=[
    {id:"1", name:"Hombre "},
    {id:"2", name:"Mujer"},
    
];

edades: any[]=[
    {id:"1", name:"18-25 "},
    {id:"2", name:"26-30"},
    {id:"3", name:"31-40 "},
    {id:"4", name:"41-50 "},
    {id:"5", name:">50 "}
];

ecivils: any[]=[
    {id:"1", name:"Soltero/a "},
    {id:"2", name:"Casado/a"},
    {id:"3", name:"Viudo/a "},
    {id:"4", name:"Divorciado/a "}
    
];

especialidad: any[]=[
    {id:"1", name:"Neumología"},
    {id:"2", name:"Infecciosas "},
    {id:"3", name:"Medicina interna "},
    {id:"4", name:"Cuidados intensivos "},
    {id:"5", name:"Urgencias"},
    {id:"6", name:"Nefrología "},
    {id:"7", name:"Cardiología "},
    {id:"8", name:"Reumatología "},
    {id:"9", name:"Digestivo "},
    {id:"10", name:"Endocrinología "},
    {id:"11", name:"Oncología "},
    {id:"12", name:"Hematología "},
    {id:"13", name:"Especialidad médico-quirúrgica "},
    {id:"14", name:"Especialidad quirúrgica "},
    {id:"15", name:"No procede "}
];

areasTrabajoCovid: any[]=[
    {id:"1", name:"Planta COVID"},
    {id:"2", name:"Planta NO COVID "},
    {id:"3", name:"Urgencias "},
    {id:"4", name:"Cuidados intensivos "},
    {id:"5", name:"Reanimación"},
    {id:"6", name:"Hemodiálisis "},
    {id:"7", name:"Teletrabajo "},
    {id:"8", name:"Guardias "},
    {id:"9", name:"Otras "},
   
];

  constructor(
    private formBuilder: FormBuilder,
    private router:Router, 
    public auth: AuthService) { 
 this.checkoutForm = this.formBuilder.group({
   ocupacion:'',
   gener:'',
   edad:'',
   ecivil:'',
   especialidad:'',
   areasTrabajoCovid:'',
   atiendeCovid:''

    });




    }

  
  onSubmit(customerData) {
  console.log ( customerData);
  console.warn('Your order has been submitted', customerData);
    //this.router.navigate(['presentacion',customerData]);


  }
  

}