import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de GruposActividades.service.ts
import { GrupoActividadService } from 'src/app/servicios/grupo-actividad.service';

@Component({
  selector: 'app-grupo-actividad-list',
  templateUrl: './grupo-actividad-list.component.html',
  styleUrls: ['./grupo-actividad-list.component.css']
})
export class GrupoActividadListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';

  //Creamos el arreglo vacio llamado grupos
  grupos: any = [];

  constructor(private grupoActividadService: GrupoActividadService) { }

  ngOnInit(): void {
    this.obtenerGrupos();
  }
  obtenerGrupos(){
    this.grupoActividadService.getGrupos().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.grupos = res;
      },
      err => console.error(err)
    );
  }

}
