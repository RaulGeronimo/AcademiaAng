import { Component, HostBinding, OnInit } from '@angular/core';
import { Grupos } from 'src/app/modelos/Grupos';
import { GruposService } from 'src/app/servicios/grupos.service';
import { ActivatedRoute, Router } from '@angular/router'; //Para enviar a una ruta Especifica
//Llave foranea
import { DeportistaService } from 'src/app/servicios/deportista.service';
import { ActividadesService } from 'src/app/servicios/actividades.service';

@Component({
  selector: 'app-grupos-form',
  templateUrl: './grupos-form.component.html',
  styleUrls: ['./grupos-form.component.css']
})
export class GruposFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  grupos: Grupos = {
    codigo: 0,
    idDeportista: 0,
    idActividad: 0,
    horarios: ''
  };

  Deportista: any = [];
  Actividades: any = [];
  edit: boolean = false;

  constructor(private gruposService: GruposService, private router: Router, private activatedRoute: ActivatedRoute,
    private deportistaService: DeportistaService, private actividadesService: ActividadesService) { }

  ngOnInit(): void {
    this.obtenerActividad();
    this.obtenerDeportista();
    const params = this.activatedRoute.snapshot.params;
    if(params['codigo']) {
      this.gruposService.getGrupo(params['codigo']).subscribe(
        res => {
          console.log(res); //Muestra en consola
          this.grupos = res; //Muestra en el navegador
          this.edit = true; //Asignamos que es verdadero
        },
        err => console.error(err)
      );
    }
  }

  addGrupo(){
    //elementos que no vamos a ocupar por que ya los tiene datos automaticos por el sistema
    delete this.grupos.codigo;
    this.gruposService.createGrupo(this.grupos).subscribe(
      res => {
        //Llenamos el arreglo con la respuesta
        console.log(res);
        this.router.navigate(['grupos']);
      },
      err => console.error(err)
    );
  }

  actualizaGrupo(){
    const params = this.activatedRoute.snapshot.params;
    this.gruposService.updateGrupo(params['codigo'], this.grupos).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/grupos']);
      },
      err => console.error(err)
    );
  }

  obtenerDeportista(){
    this.deportistaService.getDeportistas().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.Deportista = res;
      },
      err => console.error(err)
    );
  }

  obtenerActividad(){
    this.actividadesService.getActividades().subscribe(
      res => {
        //Llena el arreglo con la respuesta que enviamos
        this.Actividades = res;
      },
      err => console.error(err)
    );
  }

}
