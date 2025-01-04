import { GetItems } from "./scripts/get.mjs";

document.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

    let el = e.target;

    if (el.classList.contains("send")) {
        const FORM_DATA = new GetItems();
        FORM_DATA.catchFormData();
    }
})