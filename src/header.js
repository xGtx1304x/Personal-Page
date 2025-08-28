function Header() {
  return `
    <header>
  <a id="LogoHome">
    <img src="src/assets/logo header.png" alt="Logo">
  </a>
  <button class="menu-toggle">☰</button>
  <nav>
    <ul>
      <li><button id="About" id="About">Cursos</button></li>
      <li><button id="Contact" id="Contact">Sobre mí</button></li>
      <li><button id="Home" id="Home">Home</button></li>
    </ul>
  </nav>
</header>
<div class="overlay"></div>
`;
}

export default Header;
