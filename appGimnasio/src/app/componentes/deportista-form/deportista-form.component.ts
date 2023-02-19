import { Component, HostBinding, OnInit } from '@angular/core';
import { Deportista } from 'src/app/modelos/Deportista';
import { DeportistaService } from 'src/app/servicios/deportista.service';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica

@Component({
  selector: 'app-deportista-form',
  templateUrl: './deportista-form.component.html',
  styleUrls: ['./deportista-form.component.css']
})
export class DeportistaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  deportista: Deportista = {
    idDeportista: 0,
    nombre: '',
    apellidos: '',
    fechaInscripcion: new Date(),
    tipoInscripcion: '',
    noActividades: 0,
    nombreActividades: '',
    cuota: {},
    promocion: {},
    horario: ''
  };

  edit: boolean = false;

  constructor(private deportistaService: DeportistaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['idDeportista']) {
      this.deportistaService.getDeportista(params['idDeportista']).subscribe(
        res => {
          console.log(res); //Muestra en consola
          this.deportista = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        err => console.error(err)
      );
    }
  }

  addDeportista(){
    //elementos que no vamos a ocupar por que ya los tiene datos automaticos por el sistema
    delete this.deportista.idDeportista;
    delete this.deportista.fechaInscripcion;
    this.deportistaService.createDeportista(this.deportista).subscribe(
      res => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['deportista']);
      },
      err => console.error(err)
    );
  }

  actualizaDeportista(){
    delete this.deportista.fechaInscripcion;
    const params = this.activatedRoute.snapshot.params;
    this.deportistaService.updateDeportista(params['idDeportista'], this.deportista).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/deportista']);
      },
      err => console.error(err)
    );
  }

}
