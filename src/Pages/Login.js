import React, { useState } from "react";
import "../../src/styles/Login.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Login = () => {
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { roll: roll, password: password };
    setAllEntry([...allEntry, newEntry]);
  };
  return (
    <>
      <div className="content-box">
        <div className="logo-box">
          <img
            className="form-img"
            src="/images/mini-img3.png"
            alt="not available"
          />
        </div>
        <div className="form-box-login">
          <div className="form-nav">
            <div className="arrow-icon">
            <Link to="/">
              <ArrowBackIcon className="arrow" />
            </Link>
            </div>
            <div>
            <img
              className="winkeat-logo-form"
              src="/images/winkeat-logo2.png"
              alt="not available"
            />

            </div>
          </div>

          <form action="" onSubmit={submitForm}>
            <div className="input-form">
              <input
                type="text"
                name="roll"
                id="roll"
                placeholder="Roll Number"
                autoComplete="off"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
              />
            </div>
            <div className="input-form">
              <input 
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="submit-btn" type="submit">Sign In</button>
          </form>

          <div className="form-footer">
          <div className="footer-top">
            <span><Link>Forgot Your Password?</Link></span><br/>
            <span><Link>Contact Us</Link></span>
          </div>
          <div className="footer-bottom">
            Didn't have an account?<Link to="/register">Sign Up</Link>
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
