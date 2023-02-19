import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz

@Injectable({
  providedIn: 'root'
})
export class GrupoActividadService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) { }

  getGrupos(){
    return this.http.get(`${this.API_URI}/grupoActividad`);
  }
}
