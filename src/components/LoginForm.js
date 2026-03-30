import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DisplayStatus from "./DisplayStatus";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.trim() === "" || password.trim() === "") {
      setMessage("Username and password cannot be empty.");
      setMessageType("error");
      setLoginSuccess(false);
      return;
    }

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      setMessageType("error");
      setLoginSuccess(false);
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();

      const matchedUser = users.find(
        (user) => user.username === username && user.email === password
      );

      if (matchedUser) {
        setMessage("Login successful!");
        setMessageType("success");
        setLoginSuccess(true);
      } else {
        setMessage("Invalid username or password.");
        setMessageType("error");
        setLoginSuccess(false);
      }
    } catch (error) {
      setMessage("Error connecting to server.");
      setMessageType("error");
      setLoginSuccess(false);
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      const timer = setTimeout(() => {
        navigate("/flavors");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loginSuccess, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Login</button>

      <div>
        <a href="#!" onClick={(e) => e.preventDefault()}>
            Forgot Password?
        </a>
      </div>

      {message && <DisplayStatus type={messageType} message={message} />}
    </form>
  );
}

export default LoginForm;