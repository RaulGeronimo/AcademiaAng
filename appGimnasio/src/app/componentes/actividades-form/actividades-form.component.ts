import { Component, HostBinding, OnInit } from '@angular/core';
import { Actividades } from 'src/app/modelos/Actividades';
import { ActividadesService } from 'src/app/servicios/actividades.service';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
//Llave Foranea
import { InstructorService } from 'src/app/servicios/instructor.service';

@Component({
  selector: 'app-actividades-form',
  templateUrl: './actividades-form.component.html',
  styleUrls: ['./actividades-form.component.css']
})
export class ActividadesFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  actividades: Actividades = {
    codigo: 0,
    rfcInstructor: '',
    nombre: '',
    descripcion: '',
    imagen: ''
  };

  instructor: any = [];
  edit: boolean = false;

  constructor(private actividadesService: ActividadesService, private instructorService: InstructorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerInstructor();
    const params = this.activatedRoute.snapshot.params;
    if(params['codigo']) {
      this.actividadesService.getActividad(params['codigo']).subscribe(
        res => {
          console.log(res); //Muestra en consola
          this.actividades = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        err => console.error(err)
      );
    }
  }

  addActividad(){
    //elementos que no vamos a ocupar por que ya los tiene datos automaticos por el sistema
    delete this.actividades.codigo;
    this.actividadesService.createActividad(this.actividades).subscribe(
      res => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['actividades']);
      },
      err => console.error(err)
    );
  }

  actualizaActividad(){
    const params = this.activatedRoute.snapshot.params;
    this.actividadesService.updateActividad(params['codigo'], this.actividades).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/actividades']);
      },
      err => console.error(err)
    );
  }

  obtenerInstructor(){
    this.instructorService.getInstructores().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.instructor = res;
      },
      err => console.error(err)
    );
  }

}
