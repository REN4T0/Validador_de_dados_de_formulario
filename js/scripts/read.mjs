export class Read {
    static showData() {
        const STORAGE = JSON.parse(localStorage.getItem("persons")) || [];
        const TABLE_BODY = document.querySelector("tbody");
        TABLE_BODY.innerHTML = "";

        STORAGE.forEach(register => {
            let row = document.createElement("tr");

            for (let key in register) {
                let tableData = document.createElement("td");
                tableData.innerText = register[`${key}`];
                row.appendChild(tableData);
            }

            TABLE_BODY.appendChild(row);
        });
    }
}