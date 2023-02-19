import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de Grupos.service.ts
import { GruposService } from 'src/app/servicios/grupos.service';

@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.css']
})
export class GruposListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';

  //Creamos el arreglo vacio llamado grupos
  grupos: any = [];

  constructor(private gruposService: GruposService) { }

  ngOnInit(): void {
    this.obtenerGrupos();
  }
  obtenerGrupos(){
    this.gruposService.getGrupos().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.grupos = res;
      },
      err => console.error(err)
    );
  }

  borrarGrupos(codigo: string){
    this.gruposService.deleteGrupo(codigo).subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerGrupos();
      },
      err => console.error(err)
    );
  }
}
