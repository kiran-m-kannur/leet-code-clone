import React, { useState } from "react";

import "./Signup.css";
import { backendUrl } from "../../constants.js";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendUrl}/signup`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <div id="signup">
      <div className="signup-form">
        <h2 className="sign">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="subform">
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="subform">
            <label htmlFor="password">Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
