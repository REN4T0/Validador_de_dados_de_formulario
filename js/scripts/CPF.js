export class CPF {
    isValid() {
        let trueCPF = this.cpf.slice(0, -2);

        do {
            let arrayCPF = Array.from(trueCPF);
            let multiplyCPF = arrayCPF.map((value, index) => trueCPF.length === 10 ? value * index : value * (index + 1));
            let sumCPF = multiplyCPF.reduce((acc, value) => acc += value);

            (sumCPF % 11) >= 10 ? trueCPF += '0' : trueCPF += sumCPF % 11;
        } while (trueCPF.length < 11);

        return this.cpf === trueCPF;
    }

    isSequential() {
        if (this.cpf === this.cpf[0].repeat(this.cpf.length)) {
            this.showError('Sequential CPF');
        } else return this.isValid();
    }

    isOnlyNumber() {
        if (this.cpf.match(/[a-zA-Z\W]/g)) {
            this.showError('Innumerable CPF');
        } else return this.isSequential();
    }

    lengthIsCorrect() {
        if (this.cpf.length !== 11) {
            this.showError('CPF Length');
        } else return this.isOnlyNumber();
    }
}