import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-profile-nefro',
  templateUrl: './profile-nefro.component.html',
  styleUrls: ['./profile-nefro.component.css']
})
export class ProfileNefroComponent  {

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
    {id:"1", name:"Nefrologo/a "},
    {id:"2", name:"Enfermero/a "},
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
dondeTrabaja: any[]=[
   {id:"1", name:"Trabaja en centro de diálisis"},
   {id:"2", name:"Trabaja en hospital"}
]



  constructor(
    private formBuilder: FormBuilder,
    private router:Router, 
    public auth: AuthService) { 
  this.checkoutForm = this.formBuilder.group({
   zonas:'',
   ocupacion:'',
   gener:'',
   edad:'',
   ecivil:'',
   dondeTrabaja:'',
   areasTrabajoCovid:'',
   atiendeCovid:'',
   familiarCovid:'',
   amigoCovid:'',
   vecinoCovid:'',
   compaCovid:'',
   conviveCovid:'',
   difSueno:'',
   difPerSueno:'',
   despTemprano:'',
   satisSueno:'',
   suenoInterfiere:'',
   sentidoNervioso:'',
   demasCuenta:'',
   preocupadoSueno:'',
   dejarPreocuparse:'',
   preocupaExceso:'',
   dificultadRelax:'',
   intranquiloQuieto:'',
   irritadoFacil:'',
   miedoTerrible:'',
   pocoInteres:'',
   decaido:'',
   dificultadDormido:'',
   pocaEnergia:'',
   apetito:'',
   fracaso:'',
   dificilConcentrar:'',
   movidoInquieto:'',
   mejorMuerto:'',
   qdificultad:'',
   sentiAntes:'',
   problemasDormido:'',
   pensarSuceso:'',
   enojado:'',
   noAlterarme:'',
   pensarEnEllo:'',
   sentiaComo:'',
   matenerLejos:'',
   imagenSuceso:'',
   sobresaltar:'',
   noPensar:'',
   darCuenta:'',
   misSentimientos:'',
   meEncontraba:'',
   problemaConciliar:'',
   meInvaden:'',
   apartarlo:'',
   problemaConcentracion:'',
   cosasRecordaban:'',
   sentiaVigilante:'',
   sonabaCon:'',
   noHablar:'',
   apoyoPsico:'',
   materialPsico:'',
   matPsico:'',
   recurPsico:'',
   interPsico:'',
   terapia:'',
   epiApropiado:'',
   noPreparado:'',
   faltaInfo:'',
   cambipProtocolo:'',
   preocupacion:'',
   contagiar:'',
   contagiarme:'',
   excesoTrabajo:'',
   acomodarse:'',
   dificultadEpi:'',
   aislamiento:'',
   terapeutica:'',
   brote:''



    });





    }

  
  onSubmit(customerData) {
  console.log ( customerData.zonas);

  if (customerData.matPsico === true){
    customerData.matPsico = 1;
  }else{
    customerData.matPsico = 0;
  }

  if (customerData.recurPsico === true){
    customerData.recurPsico = 1;
  }else{
    customerData.recurPsico = 0;
  }

  if (customerData.interPsico === true){
    customerData.interPsico = 1;
  }else{
    customerData.interPsico = 0;
  }
   if (customerData.terapia === true){
    customerData.terapia = 1;
  }else{
    customerData.terapia = 0;
  }





  console.warn('Your order has been submitted', customerData);
    //this.router.navigate(['presentacion',customerData]);


  }
  

}