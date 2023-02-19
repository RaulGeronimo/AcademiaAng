import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Deportista } from '../modelos/Deportista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeportistaService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) { }

  getDeportistas(){
    return this.http.get(`${this.API_URI}/deportista`);
  }

  getDeportista(idDeportista: String){
    return this.http.get(`${this.API_URI}/deportista/${idDeportista}`);
  }

  createDeportista(deportista: Deportista){
    return this.http.post(`${this.API_URI}/deportista`, deportista);
  }

  deleteDeportista(idDeportista: string){
    return this.http.delete(`${this.API_URI}/deportista/${idDeportista}`);
  }

  updateDeportista(idDeportista: string, updateDeportista: Deportista): Observable<Deportista>{
    return this.http.put(`${this.API_URI}/deportista/${idDeportista}`, updateDeportista);
  }
}
