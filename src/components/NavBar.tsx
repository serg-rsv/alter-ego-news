import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="news">News</NavLink>
      </li>
      <li>
        <NavLink to="login">LogIn</NavLink>
      </li>
      <li>
        <NavLink to="profile">Profile</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
