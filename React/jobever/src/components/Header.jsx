const headerData = {
  site_name: "Welcome to My Website",
  nav: [
    { link: "Home", text: "Home" },
    { link: "About", text: "About" },
    { link: "Services", text: "Services" },
    { link: "Contact", text: "Contact" },
  ],
};

export default function Header() {
  return (
    <header>
      <h1>{headerData.site_name}</h1>
      <Nav />
    </header>
  );
}

function Nav() {
  let data = headerData.nav;
  const listItem = data.map((item) => (
    <li key={item.link}>
      <a href={item.link}>{item.text}</a>
    </li>
  ));
  return (
    <nav>
      <ul>{listItem}</ul>
    </nav>
  );
}
