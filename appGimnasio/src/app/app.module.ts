import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importamos el modulo de http
import { HttpClientModule } from '@angular/common/http';
//Importamos el modulo de FormModule que va enlazar los input
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './componentes/navigation/navigation.component';
import { ActividadesFormComponent } from './componentes/actividades-form/actividades-form.component';
import { ActividadesListComponent } from './componentes/actividades-list/actividades-list.component';
import { InstructorFormComponent } from './componentes/instructor-form/instructor-form.component';
import { InstructorListComponent } from './componentes/instructor-list/instructor-list.component';
import { GruposFormComponent } from './componentes/grupos-form/grupos-form.component';
import { GruposListComponent } from './componentes/grupos-list/grupos-list.component';
import { DeportistaFormComponent } from './componentes/deportista-form/deportista-form.component';
import { DeportistaListComponent } from './componentes/deportista-list/deportista-list.component';
import { GrupoActividadListComponent } from './componentes/grupo-actividad-list/grupo-actividad-list.component';

import { InstructorService } from './servicios/instructor.service';
import { DeportistaService } from './servicios/deportista.service';
import { GruposService } from './servicios/grupos.service';
import { ActividadesService } from './servicios/actividades.service';
import { GrupoActividadService } from './servicios/grupo-actividad.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ActividadesFormComponent,
    ActividadesListComponent,
    InstructorFormComponent,
    InstructorListComponent,
    GruposFormComponent,
    GruposListComponent,
    DeportistaFormComponent,
    DeportistaListComponent,
    GrupoActividadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    InstructorService,
    DeportistaService,
    ActividadesService,
    GruposService,
    GrupoActividadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
