import { Component, HostBinding, OnInit } from '@angular/core';
import { Instructor } from 'src/app/modelos/Instructor';
import { InstructorService } from 'src/app/servicios/instructor.service';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css']
})
export class InstructorFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  instructor: Instructor = {
    rfc: '',
    nombre: '',
    apellidos: '',
    salario: {},
    telefono: 0,
    horarios: ''
  };

  edit: boolean = false;

  constructor(private instructorService: InstructorService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if(params['rfc']) {
      this.instructorService.getInstructor(params['rfc']).subscribe(
        res => {
          console.log(res); //Muestra en consola
          this.instructor = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        err => console.error(err)
      );
    }
  }

  addInstructor(){
    this.instructorService.createInstructor(this.instructor).subscribe(
      res => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['instructor']);
      },
      err => console.error(err)
    );
  }

  actualizaInstructor(){
    const params = this.activatedRoute.snapshot.params;
    this.instructorService.updateInstructor(params['rfc'], this.instructor).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/instructor']);
      },
      err => console.error(err)
    );
  }

}
