import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser({});
      }
    });
  }

  return (
    <nav className='navigation'>
      <NavLink exact to='/'>
        <li>Home Page</li>
      </NavLink>
      

      {Object.keys(user).length > 0 ? (
        <NavLink to='/shows'>
          <li>Shows</li>
        </NavLink>
      ) : null}

      {Object.keys(user).length <= 0 ? (
        <NavLink to='/signup'>
          <li>Sign Up</li>
        </NavLink>
      ) : null }

      {Object.keys(user).length <= 0 ? (
        <NavLink to='/login'>
          <li>Log In</li>
        </NavLink>
      ) : (
        null
      )}

      {Object.keys(user).length > 0 ? (
        <NavLink to='/logout'>
          <li onClick={handleLogoutClick}>Log Out</li>
        </NavLink>
      ) : null}
    </nav>
  );
}

export default NavBar;