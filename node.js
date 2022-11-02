class User {
    constructor(name, lastName, books = [], jackets = []){
        this.name = name;
        this.lastName = lastName;
        this.books = books;
        this.pets = jackets
    }
    getFullName(){
        return(`${this.name} ${this.lastName}`)
    }
    addMascota(name){
        this.pets.push(name);
        void this.jackets
    }
    countPets(){
        return this.jackets.length
    }
    addBook(name, author){
        this.books.push({name : name, author : author});
        void this.books
    }
    getBookNames(){
        let bookNames = [];
        this.books.forEach(book => bookNames.push(book.name));
        return bookNames
    }
}

const usuario1 = new User('Leonardo', 'Guglielmetti') // Creating new instance of User class
console.warn('Nuevo usuario creado')
console.log(usuario1)
usuario1.addCampera('Old Jacket')
usuario1.addCampera('Gross Jacket')
usuario1.addCampera('Yellow Jacket')
console.warn('Nuevas mascotas agregadas')
console.log(usuario1)
console.log(`Cantidad de camperas : ${usuario1.countJackets()}`)
usuario1.addBook('Introduction to Algorithms', 'Cormen, Leiserson, Rivest, Stein')
usuario1.addBook('Parallel Programming', 'Rauber, Rünger')
usuario1.addBook('Functional Programming Patterns', 'Bevilacqua, Linn')
console.warn('Nuevos Libros Agregados')
console.log(usuario1)
console.log(`Nombres de Libros agregados : ${usuario1.getBookNames()}`)