import { CPF } from "./CPF.js";

export class Validate extends CPF {

    showError(type) {
        switch (type) {
            case 'Empty':
                throw new Error("Preencha todos os dados no formulário.");
            case 'CPF Length':
                throw new Error("O CPF deve possuir 11 dígitos.");
            case 'Innumerable CPF':
                throw new Error("O CPF deve possuir apenas números.");
            case 'Sequential CPF':
                throw new Error("Números sequênciais detectados - CPF inválido.");
            case 'Invalid CPF':
                throw new Error("CPF inválido.");
            case 'Username Length':
                throw new Error("O nome de usuário deve ter entre 3 a 12 caracteres.");
            case 'Special Char':
                throw new Error("O nome de usuário deve possuir apenas números e letras.");
            case 'Pass Length':
                throw new Error("A senha deve ter entre 6 a 12 caracteres.");
            case 'Diferent Pass':
                throw new Error("As senhas são diferentes.");
            default:
                break;
        }
    }

    passwordIsValid() {
        if (this.password.length < 6 || this.password.length > 12) this.showError("Pass Length");
        if (this.password !== this.confirmPass) this.showError("Diferent Pass");
    }

    usernameIsValid() {
        if (this.username.length < 3 || this.username.length > 12) this.showError("Username Length");
        this.username.match(/[\W]/g) ? this.showError("Special Char") : this.passwordIsValid();
    }

    isFilled(data) {
        data.forEach(value => value.replaceAll(' ', '').length === 0 ? this.showError('Empty') : [this.name, this.lastname, this.cpf, this.username, this.password, this.confirmPass] = data);
        this.lengthIsCorrect() ? this.usernameIsValid() : this.showError("Invalid CPF");
    }
}