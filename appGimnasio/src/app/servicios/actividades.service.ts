import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Actividades } from '../modelos/Actividades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) { }

  getActividades(){
    return this.http.get(`${this.API_URI}/actividades`);
  }

  getInstructor(){
    return this.http.get(`${this.API_URI}/actividades`);
  }

  getActividad(codigo: String){
    return this.http.get(`${this.API_URI}/actividades/${codigo}`);
  }

  createActividad(actividades: Actividades){
    return this.http.post(`${this.API_URI}/actividades`, actividades);
  }

  deleteActividad(codigo: string){
    return this.http.delete(`${this.API_URI}/actividades/${codigo}`);
  }

  updateActividad(codigo: string, updateActividades: Actividades): Observable<Actividades>{
    return this.http.put(`${this.API_URI}/actividades/${codigo}`, updateActividades);
  }
}
