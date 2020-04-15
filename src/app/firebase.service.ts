import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PruebaModel } from '../../model/prueba.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

  private url ='https://encuestacovid19emocional.firebaseio.com';


  constructor( private http: HttpClient ) { }


  crearHeroe( heroe: PruebaModel ) {

    return this.http.post(`${ this.url }/DatosEncuesta.json`, heroe)
            .pipe(
              map( (resp: any) => {
                heroe.id = resp.name;
                return heroe;
              })
            );

  }

  actualizarHeroe( heroe: PruebaModel ) {

    const heroeTemp = {
      ...heroe
    };

    delete heroeTemp.id;

    return this.http.put(`${ this.url }/heroes/${ heroe.id }.json`, heroeTemp);


  }

  borrarHeroe( id: string ) {

    return this.http.delete(`${ this.url }/heroes/${ id }.json`);

  }


  getHeroe( id: string ) {

    return this.http.get(`${ this.url }/heroes/${ id }.json`);

  }


  getHeroes() {
    return this.http.get(`${ this.url }/heroes.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(0)
            );
  }

  private crearArreglo( heroesObj: object ) {

    const heroes: PruebaModel[] = [];

    Object.keys( heroesObj ).forEach( key => {

      const heroe: PruebaModel = heroesObj[key];
      heroe.id = key;

      heroes.push( heroe );
    });


    return heroes;

  }


}
