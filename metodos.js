//Inserir dados
localStorage.setItem("name","Lucas")

//restart sem perde dados


//resgatar dados
const name = localStorage.getItem("name")

console.log(name)

//resgatando item que não existe

const lastName = localStorage.getItem("lastName")

console.log(lastName);

//remover item

localStorage.removeItem("name");

//remover todos os itens

localStorage.clear();

//1-salvando objetos
const person = {
    name: "Lucas",
    Age: "29",
    job: "Student",
}

localStorage.setItem("person",JSON.stringify(person))

const getPerson = localStorage.getItem("person")

console.log(getPerson) //retorna um texto invés de objeto, pois está utilizando JSON

//2-restando objeto

const personObject = JSON.parse(getPerson)

console.log(typeof personObject)

console.log(personObject.Age)

