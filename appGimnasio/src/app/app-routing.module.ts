import { NgModule } from '@angular/core';
//Importacion que permite definir las rutas de la app
import { RouterModule, Routes } from '@angular/router';
//Importamos el archivo que viene en la ruta sig.
import { InstructorListComponent } from './componentes/instructor-list/instructor-list.component';
import { DeportistaListComponent } from './componentes/deportista-list/deportista-list.component';
import { ActividadesListComponent } from './componentes/actividades-list/actividades-list.component';
import { GruposListComponent } from './componentes/grupos-list/grupos-list.component';
import { GrupoActividadListComponent } from './componentes/grupo-actividad-list/grupo-actividad-list.component';

//Importamos las clases de los Formularios
import { InstructorFormComponent } from './componentes/instructor-form/instructor-form.component';
import { DeportistaFormComponent } from './componentes/deportista-form/deportista-form.component';
import { ActividadesFormComponent } from './componentes/actividades-form/actividades-form.component';
import { GruposFormComponent } from './componentes/grupos-form/grupos-form.component';

const routes: Routes = [
  //Creamos objetos
  //Instructor
  {
    path: '',
    redirectTo: '/instructor',
    pathMatch: 'full'
  },
  {
    path: 'instructor', //Se creo la ruta para abrir un componente
    component: InstructorListComponent
  },
  {
    path: 'instructor/agregar', //Se crea la ruta para abrir el componente del formulario
    component: InstructorFormComponent
  },
  {
    path: 'instructor/actualizar/:rfc', //Ruta para Actualizar
    component: InstructorFormComponent
  },
  /* Deportista */
  {
    path: '',
    redirectTo: '/deportista',
    pathMatch: 'full'
  },
  {
    path: 'deportista', //Se creo la ruta para abrir un componente
    component: DeportistaListComponent
  },
  {
    path: 'deportista/agregar', //Se crea la ruta para abrir el componente del formulario
    component: DeportistaFormComponent
  },
  {
    path: 'deportista/actualizar/:idDeportista', //Ruta para Actualizar
    component: DeportistaFormComponent
  },
  /* Actividades */
  {
    path: '',
    redirectTo: '/actividades',
    pathMatch: 'full'
  },
  {
    path: 'actividades', //Se creo la ruta para abrir un componente
    component: ActividadesListComponent
  },
  {
    path: 'actividades/agregar', //Se crea la ruta para abrir el componente del formulario
    component: ActividadesFormComponent
  },
  {
    path: 'actividades/actualizar/:codigo', //Ruta para Actualizar
    component: ActividadesFormComponent
  },
  /* Grupos */
  {
    path: '',
    redirectTo: '/grupos',
    pathMatch: 'full'
  },
  {
    path: 'grupos', //Se creo la ruta para abrir un componente
    component: GruposListComponent
  },
  {
    path: 'grupos/agregar', //Se crea la ruta para abrir el componente del formulario
    component: GruposFormComponent
  },
  {
    path: 'grupos/actualizar/:codigo', //Ruta para Actualizar
    component: GruposFormComponent
  },
  /* Alumnos por Grupo */
  {
    path: '',
    redirectTo: '/gruposActividades',
    pathMatch: 'full'
  },
  {
    path: 'gruposActividades', //Se creo la ruta para abrir un componente
    component: GrupoActividadListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
