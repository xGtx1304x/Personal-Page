import Header from "./header.js";
import Footer from "./footer.js";

const text = [
  "Proximamente!",
  "Página bajo construcción. Estará lista muy pronto. ¡Gracias por tu paciencia!",
];

let body = document.getElementById("root");

body.innerHTML = Header();

body.innerHTML += `
    <main>
      <h1 id="title"></h1>
      <p id ="content">
      </p>
    </main>
    
`;

body.innerHTML += Footer();

let title = document.getElementById("title");
let content = document.getElementById("content");

let homebtn = document.getElementById("Home");
let aboutbtn = document.getElementById("About");
let contactbtn = document.getElementById("Contact");

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

title.innerText = text[0];
content.innerText = text[1];

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

homebtn.addEventListener("click", () => {
  title.innerText = text[0];
  content.innerText = text[1];
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

aboutbtn.addEventListener("click", () => {
  title.innerText = text[0];
  content.innerText = text[1];
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

contactbtn.addEventListener("click", () => {
  title.innerText = text[0];
  content.innerText = text[1];
  nav.classList.remove("active");
  overlay.classList.remove("active");
});
