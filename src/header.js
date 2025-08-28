function Header() {
  return `
    <header>
  <h1>My Page</h1>
  <button class="menu-toggle">☰</button>
  <nav>
    <ul>
      <li><button id="Home" id="Home">Home</button></li>
      <li><button id="About" id="About">Cursos</button></li>
      <li><button id="Contact" id="Contact">Sobre mí</button></li>
    </ul>
  </nav>
</header>
<div class="overlay"></div>
`;
}

export default Header;
