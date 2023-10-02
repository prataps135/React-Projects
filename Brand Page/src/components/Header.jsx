import "./styles/Header.css";

function Header() {
  return (
    <div className="container">
      <nav>
        <div>
          <img src="public/brand_logo.png" alt="nike logo" />
        </div>

        <ul>
          <li href="">Menu</li>
          <li href="">Location</li>
          <li href="">About</li>
          <li href="">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
}

export default Header;
