//Se crea la interfaz
export interface Deportista{
    idDeportista?: number;
    nombre?: string;
    apellidos?: string;
    fechaInscripcion?: Date;
    tipoInscripcion?: string;
    noActividades?: number;
    nombreActividades?: string;
    cuota?: DoubleRange;
    promocion?: DoubleRange;
    horario?: string;
}
