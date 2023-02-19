import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de Deportista.service.ts
import { DeportistaService } from 'src/app/servicios/deportista.service';

@Component({
  selector: 'app-deportista-list',
  templateUrl: './deportista-list.component.html',
  styleUrls: ['./deportista-list.component.css']
})
export class DeportistaListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado deportista
  deportista: any = [];

  constructor(private deportistaService: DeportistaService) { }

  ngOnInit(): void {
    this.obtenerDeportista();
  }
  obtenerDeportista(){
    this.deportistaService.getDeportistas().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.deportista = res;
      },
      err => console.error(err)
    );
  }

  borrarDeportista(idDeportista: string){
    this.deportistaService.deleteDeportista(idDeportista).subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerDeportista();
      },
      err => console.error(err)
    );
  }

}
