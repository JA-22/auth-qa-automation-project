import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {

    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.status === 200) {
      alert("Login successful");
    } else {
      setError(data.error);
    }

  };

  return (
    <div>

      <h1>Login</h1>

      <input
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button id="loginButton" onClick={handleLogin}>
        Login
      </button>

      {error && <p id="errorMessage">{error}</p>}

    </div>
  );

}

export default App;