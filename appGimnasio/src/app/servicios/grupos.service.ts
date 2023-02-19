import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Grupos } from '../modelos/Grupos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GruposService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) { }

  getGrupos(){
    return this.http.get(`${this.API_URI}/grupos`);
  }

  getGrupo(codigo: String){
    return this.http.get(`${this.API_URI}/grupos/${codigo}`);
  }

  createGrupo(grupos: Grupos){
    return this.http.post(`${this.API_URI}/grupos`, grupos);
  }

  deleteGrupo(codigo: string){
    return this.http.delete(`${this.API_URI}/grupos/${codigo}`);
  }

  updateGrupo(codigo: string, updateGrupos: Grupos): Observable<Grupos>{
    return this.http.put(`${this.API_URI}/grupos/${codigo}`, updateGrupos);
  }
}
