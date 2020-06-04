import React from 'react';
import logo from '../img/wcqlogo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav>
        <div className="logoBtn">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="navBtn" onClick={this.handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>

        <ul className={this.state.isOpen ? 'showNav' : 'undefined'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/request">Request Form</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/approval">Approval</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
