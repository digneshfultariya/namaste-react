import { useState } from "react";

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="data:image/png;base64,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"
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
              <li>Home</li>
              <li>About</li>
              <li>Offers</li>
              <li>Cart</li>
          </ul>
          <button className="login-btn" onClick={toggle}>{isLoggedIn ? 'Login' : 'Log out'}</button>
      </div>
    );
  };

export default Header;