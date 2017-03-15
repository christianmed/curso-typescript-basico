function holaMundo(nombre) {
  return "Hola Mundo!! Soy " + nombre;
}

var nombre = "Christian Medina";
var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);

var name:string = "Christian Medina";
var age:number = 32;
var programador:boolean = true;
var langs:Array<string> = []