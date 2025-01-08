import { GetItems } from "./scripts/get.mjs";
import { Post } from "./scripts/post.mjs";
import { Read } from "./scripts/read.mjs";

function resetForm() {
    let fieldsetElements = document.querySelectorAll(`fieldset`);
    let paragraphElements = document.querySelectorAll(`p`)

    fieldsetElements.forEach(fieldset => {
        paragraphElements.forEach(paragraph => {
            fieldset.style.borderColor = "#dadada";
            paragraph.innerText = '';
        });
    });
}

function showIncorrectInput(errorMessage) {
    let keyWords = ['todos', 'CPF', 'usuário', 'senha', 'senhas'];
    let chosenWord = new String();

    for (let word of keyWords) {
        let regex = new RegExp(word, "g");
        if (errorMessage.match(regex)) chosenWord = word;
    }

    let fieldsetElements = document.querySelectorAll(`fieldset.${chosenWord}`);
    let paragraphElements = document.querySelectorAll(`p.${chosenWord}`);

    fieldsetElements.forEach(fieldset => {
        paragraphElements.forEach(paragraph => {
            fieldset.style.borderColor = "red";
            paragraph.innerText = errorMessage;
        });
    });
}

document.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    let el = e.target;

    if (el.classList.contains("send")) {
        resetForm();
        const FORM_DATA = new GetItems();

        try {
            FORM_DATA.catchFormData();
            Post.save(FORM_DATA);
            Read.showData();            
        } catch (er) {
            showIncorrectInput(er.message)
        }

    }
});

Read.showData();