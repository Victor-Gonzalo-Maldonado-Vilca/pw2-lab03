function day(a){
  const numberDay = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  return numberDay[a];
}
//Extrayendo dia actual
let x = new Date().getDay();
console.log(day(x));