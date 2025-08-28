import Header from "./header.js";
import Footer from "./footer.js";

const text = [
  [
    "Home",
    "Welcome to my personal webpage! Feel free to explore and learn more about me.",
  ],
  [
    "About",
    "My name is Jorge. I am passionate about web development and enjoy learning new technologies. In my free time, I like to read, code, and explore the outdoors.",
  ],
  ["Contact", "You can reach me at jorgedc1304@gmail.com."],
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

title.innerText = text[0][0];
content.innerText = text[0][1];

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

homebtn.addEventListener("click", () => {
  title.innerText = text[0][0];
  content.innerText = text[0][1];
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

aboutbtn.addEventListener("click", () => {
  title.innerText = text[1][0];
  content.innerText = text[1][1];
  nav.classList.remove("active");
  overlay.classList.remove("active");
});

contactbtn.addEventListener("click", () => {
  title.innerText = text[2][0];
  content.innerText = text[2][1];
  nav.classList.remove("active");
  overlay.classList.remove("active");
});
