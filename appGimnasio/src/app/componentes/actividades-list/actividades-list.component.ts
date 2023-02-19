import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de Deportista.service.ts
import { ActividadesService } from 'src/app/servicios/actividades.service';

@Component({
  selector: 'app-actividades-list',
  templateUrl: './actividades-list.component.html',
  styleUrls: ['./actividades-list.component.css']
})
export class ActividadesListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado deportista
  actividades: any = [];

  constructor(private actividadesService: ActividadesService) { }

  ngOnInit(): void {
    this.obtenerActividad();
  }
  obtenerActividad(){
    this.actividadesService.getActividades().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.actividades = res;
      },
      err => console.error(err)
    );
  }

  borrarActividad(codigo: string){
    this.actividadesService.deleteActividad(codigo).subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerActividad();
      },
      err => console.error(err)
    );
  }
}
