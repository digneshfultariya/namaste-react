import { useState } from "react";
import './../styles/header.css';
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        height={120}
        src={Logo}
      />
    </a>
  );

  
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const toggle = () => {
      setIsLoggedIn((prevState) => !prevState)
  }

    return (
      <div className="header">
          <Title />
          <ul className='nav-items'>
              <Link to={"/"}>Home</Link>
              <Link to={"about"}>About</Link>
              <li>Offers</li>
              <li>Cart</li>
          </ul>
          <button className="login-btn" onClick={toggle}>{isLoggedIn ? 'Login' : 'Log out'}</button>
      </div>
    );
  };

export default Header;