import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { PruebaModel } from '../model/prueba.model';
import { map, delay } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

 


  constructor( private firestore: AngularFirestore  ) { }


  createUser(value){
  return this.firestore.collection('datosEncuesta').add({
    zonas0: value.zonas0,
    ocupacion1: value.ocupacion1,
    gener2: value.gener2
   
  });
}

  





 


  

  

}
