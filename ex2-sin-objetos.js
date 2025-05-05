const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
students.forEach((student) => console.log('Muestra por consola:', student));
// Utiliza el método findIndex para encontrar que índica ocupa el string "Maria"
const indexStudent = students.findIndex((student) => student === "Maria");
console.log(indexStudent);
// Utiliza el método some para saber si en este array existe la alumna "Katerina"
const checkStudent = students.some((student) => student === "Katerina" );
console.log(checkStudent)
// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
const fiveChactLong = students.find((student) => student.length <= 5)
console.log(fiveChactLong)
// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const noShortNames = students.every((student) => student.length >= 4);
console.log(noShortNames)
// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
const filteredStudents = students.filter((student) => student.includes("i"));
console.log(filteredStudents)
// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
const mapStudents = students.map((student) => student[0] );
console.log(mapStudents)