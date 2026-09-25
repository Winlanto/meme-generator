import "./Header.css";
import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={Logo} alt="Meme Generator Logo" />
        <span className="title">Meme Generator</span>
      </a>
    </header>
  );
}
