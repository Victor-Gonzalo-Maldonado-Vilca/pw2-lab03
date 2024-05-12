function day(a){
  const numberDay = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  if(0 <= a && a <= 6){
    return numberDay[a];
  } else {
    return "Día no valido";
  }
}
//Extrayendo dia actual
let x = new Date().getDay();
console.log(day(x));