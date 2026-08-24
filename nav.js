import { ORT } from "./router.js";

export function ORT_NAV() {
    const nav = document.getElementById("ort-nav");

    nav.innerHTML = `
        <button data-go="home">Home</button>
        <button data-go="use">Use</button>
        <button data-go="user">User</button>
    `;

    nav.addEventListener("click", e => {
        const to = e.target.dataset.go;
        if (to) ORT.navigate(to);
    });
}
