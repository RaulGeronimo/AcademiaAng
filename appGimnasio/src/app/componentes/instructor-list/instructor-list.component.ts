import { Component, HostBinding, OnInit } from '@angular/core';
//Importamos el archivo de Instructor.service.ts
import { InstructorService } from 'src/app/servicios/instructor.service';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {
  //Se importa el HostBinding
  @HostBinding('class') classes = 'row';
  //Creamos el arreglo vacio llamado instructor
  instructor: any = [];

  constructor(private instructorService: InstructorService) { }

  ngOnInit(): void {
    this.obtenerInstructor();
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

  borrarInstructor(rfc: string){
    this.instructorService.deleteInstructor(rfc).subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        console.log(res);
        this.obtenerInstructor();
      },
      err => console.error(err)
    );
  }

}
