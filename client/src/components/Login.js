import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Login({ user, setUser }) {

  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [errors, setErrors] = useState([]);
  // const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(setUser)
        window.location.href = "/";
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      {errors
        ? errors.map((err) => (
          <h3 style={{ color: "red" }} key={err}>
            {err}
          </h3>
        ))
        : null}

      <div className="ui focus input">
        <input
          type="text"
          placeholder="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <br />
      <div className="ui focus input">
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />
      <button type="submit" className="ui button">Login</button>
    </form>
  );
}

export default Login;