import React, {useState} from "react";
import "../../src/styles/Register.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");


  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, email: email, roll: roll, password: password, repassword: repassword };

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
        <div className="form-box">
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
                name="name"
                id="name"
                placeholder="Name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-form">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
                placeholder="Enter Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-form">
              <input
                type="password"
                name="repassword"
                id="repassword"
                placeholder="Re-enter Password"
                autoComplete="off"
                value={repassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </div>
            
            <button className="submit-btn" type="submit">
              Sign Up
            </button>
          </form>

          <div className="form-footer-register">
              Already have an account?<Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
