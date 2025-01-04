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
            default:
                break;
        }
    }

    isFilled(data) {
        data.forEach(value => value.replaceAll(' ', '').length === 0 ? this.showError('Empty') : [this.name, this.lastname, this.cpf, this.username, this.password, this.confirmPass] = data);
        this.lengthIsCorrect() ? console.log("CPF válido") : this.showError("Invalid CPF");
        console.log(this);
    }
}