export class Post {
    static save(object){
        const STORAGE = JSON.parse(localStorage.getItem("persons")) || [];

        const PERSON = {
            name: object.name,
            lastname: object.lastname,
            cpf: object.cpf,
            username: object.username,
            password: object.password            
        }

        STORAGE.push(PERSON);
        localStorage.setItem("persons", JSON.stringify(STORAGE));
    }    
}