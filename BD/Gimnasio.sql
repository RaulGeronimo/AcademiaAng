CREATE DATABASE Gimnasio;

USE Gimnasio;

CREATE TABLE Deportista(
    idDeportista INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    apellidos VARCHAR(100),
    fechaInscripcion DATETIME DEFAULT NOW(), /* Fecha de cuando se inscribio */
    tipoInscripcion VARCHAR(50), /* Se coloca si es una inscripcion Mensual o Anual */
    noActividades INT, /* El numero de actividades en donde esta inscrito */
    nombreActividades VARCHAR(100), /* El nombre de las actividades en donde esta inscrito */
    cuota DOUBLE, /* El precio que pago el Deportista por la inscripcion */
    promocion DOUBLE, /* Dependiendo del tipo de inscripcion, se le hara un descuento */
    horario VARCHAR(100) /* El horario en el que ira el deportista */
);

CREATE TABLE Instructor(
    rfc VARCHAR(50) PRIMARY KEY,
    nombre VARCHAR(100),
    apellidos VARCHAR(100),
    salario DOUBLE, /* Salario que recibe el instructor */
    telefono BIGINT, /* Telefono de Contacto */
    horarios VARCHAR(100) /* Horario de trabajo del instructor */
);

CREATE TABLE Actividades(
    codigo INT PRIMARY KEY AUTO_INCREMENT,
    rfcInstructor VARCHAR(50), /* RFC del Instructor */
    nombre VARCHAR(50), /* Nombre de la actividad */
    descripcion VARCHAR(300), /* Descripcion de la actividad */
    imagen VARCHAR(100), /* Imagen del deporte o actividad */
    FOREIGN KEY(rfcInstructor) REFERENCES Instructor(rfc) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Grupos(
    codigo INT PRIMARY KEY AUTO_INCREMENT,
    idDeportista INT,
    idActividad INT,
    horarios VARCHAR(100), /* Horario del grupo */
    FOREIGN KEY(idDeportista) REFERENCES Deportista(idDeportista) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY(idActividad) REFERENCES Actividades(codigo) ON UPDATE CASCADE ON DELETE CASCADE
);

/* Conteo de Alumnos por Grupo */
SELECT 
Actividades.Codigo, 
Actividades.Nombre, 
COUNT(Grupos.idDeportista) AS Cantidad_Deportistas, 
Actividades.imagen, 
Instructor.Nombre AS rfcInstructor
FROM Actividades

INNER JOIN Grupos
ON Actividades.codigo = Grupos.idActividad

INNER JOIN Instructor
ON Actividades.rfcInstructor = Instructor.rfc

GROUP BY(Actividades.Codigo)
ORDER BY(Actividades.Nombre);

/* ------------------------------------------------------------------ INNER JOIN ------------------------------------------------------------------ */
/* Actividades */
SELECT 
Actividades.codigo, 
Actividades.Nombre AS nombre, 
Instructor.Nombre AS rfcInstructor, 
Actividades.descripcion, 
Actividades.imagen
FROM Actividades
INNER JOIN Instructor
ON Actividades.rfcInstructor = Instructor.rfc
ORDER BY(Actividades.Nombre);

/* Deportista */
SELECT 
idDeportista, 
nombre, 
apellidos, 
tipoInscripcion, 
noActividades, 
nombreActividades, 
cuota, 
promocion, 
horario, 
DATE_FORMAT(fechaInscripcion, "%d / %b / %Y - %r") AS FechaInscripcion 
FROM Deportista 
WHERE idDeportista = 1;

/* grupos */
SELECT Grupos.codigo, 
Deportista.nombre AS Deportista, 
Actividades.nombre AS Actividad, 
Grupos.horarios, 
Actividades.imagen 
FROM Grupos 
INNER JOIN Deportista 
ON Grupos.idDeportista = Deportista.idDeportista 
INNER JOIN Actividades 
ON Grupos.idActividad = Actividades.codigo 
ORDER BY(Actividades.nombre);

/* Instructor */
SELECT 
rfc, 
nombre, 
apellidos, 
salario, 
CONCAT("(", LEFT(telefono, 3), ") ", MID(telefono, 4, 3), "-", MID(telefono, 7, 4)) AS telefono, 
horarios 
FROM Instructor 
ORDER BY nombre;