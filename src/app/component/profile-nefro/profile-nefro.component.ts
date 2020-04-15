import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from '../../auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile-nefro',
  templateUrl: './profile-nefro.component.html',
  styleUrls: ['./profile-nefro.component.css']
})
export class ProfileNefroComponent  {

  datos:any[]=[];
cubierto: boolean;
checkoutForm: any;
private url = 'https://encuestacovid19emocional.firebaseio.com/';

  zonas: any[]=[
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
    public auth: AuthService,
    private http: HttpClient) { 
  this.checkoutForm = this.formBuilder.group({
   zonas0:'',
   ocupacion1:'',
   gener2:'',
   edad3:'',
   ecivil4:'',
   dondeTrabaja5:'',
   areasTrabajoCovid6:'',
   atiendeCovid7:'',
   familiarCovid8:'',
   amigoCovid9:'',
   vecinoCovid10:'',
   compaCovid11:'',
   conviveCovid12:'',
   difSueno13:'',
   difPerSueno14:'',
   despTemprano15:'',
   satisSueno16:'',
   suenoInterfiere17:'',
   demasCuenta18:'',
   preocupadoSueno19:'',
   sentidoNervioso20:'',
   dejarPreocuparse21:'',
   preocupaExceso22:'',
   dificultadRelax23:'',
   intranquiloQuieto24:'',
   irritadoFacil25:'',
   miedoTerrible26:'',
   pocoInteres27:'',
   decaido28:'',
   dificultadDormido29:'',
   pocaEnergia30:'',
   apetito31:'',
   fracaso32:'',
   dificilConcentrar33:'',
   movidoInquieto34:'',
   mejorMuerto35:'',
   qdificultad36:'',
   sentiAntes37:'',
   problemasDormido38:'',
   pensarSuceso39:'',
   enojado40:'',
   noAlterarme41:'',
   pensarEnEllo42:'',
   sentiaComo43:'',
   matenerLejos44:'',
   imagenSuceso45:'',
   sobresaltar46:'',
   noPensar47:'',
   darCuenta48:'',
   misSentimientos49:'',
   meEncontraba50:'',
   problemaConciliar51:'',
   meInvaden52:'',
   apartarlo53:'',
  problemaConcentracion54:'',
   cosasRecordaban55:'',
   sentiaVigilante56:'',
   sonabaCon57:'',
   noHablar58:'',
   apoyoPsico59:'',
   matPsico601:'',
   recurPsico602:'',
   interPsico603:'',
   terapia604:'',
   epiApropiado61:'',
   noPreparado62:'',
   faltaInfo63:'',
   cambipProtocolo64:'',
   preocupacion65:'',
   contagiar66:'',
   contagiarme67:'',
   excesoTrabajo68:'',
   acomodarse69:'',
   dificultadEpi70:'',
   aislamiento71:'',
   terapeutica72:'',
   brote73:''



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
    return this.http.post(`${this.url}`,customerData)
    


  }
  

}