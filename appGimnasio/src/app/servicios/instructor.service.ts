import { Injectable } from '@angular/core';
//Llamar al modulo de Angular http
import { HttpClient } from '@angular/common/http';
//Importamos la interfaz
import { Instructor } from '../modelos/Instructor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  //Crear una propiedad donde este la ruta
  API_URI = 'http://localhost:3000/app';
  //Hacer una instancia para poder ocupar la propiedad http

  constructor(private http: HttpClient) { }

  getInstructores(){
    return this.http.get(`${this.API_URI}/instructor`);
  }

  getInstructor(rfc: String){
    return this.http.get(`${this.API_URI}/instructor/${rfc}`);
  }

  createInstructor(instructor: Instructor){
    return this.http.post(`${this.API_URI}/instructor`, instructor);
  }

  deleteInstructor(rfc: string){
    return this.http.delete(`${this.API_URI}/instructor/${rfc}`);
  }

  updateInstructor(rfc: string, updateInstructor: Instructor): Observable<Instructor>{
    return this.http.put(`${this.API_URI}/instructor/${rfc}`, updateInstructor);
  }
}
