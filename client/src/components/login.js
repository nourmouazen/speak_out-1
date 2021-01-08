import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyUser } from "../actions/verifyUser";
import { verifyDoctor } from "../actions/Doctors";
import { BsFillPersonFill } from "react-icons/bs";
import { BsLockFill } from "react-icons/bs";
import Footer from "./footer";

var role = false;
function Login() {
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
    usernameError: "",
    passwordError: "",
  });

  // const [submitted, setSubmitted] = useState(false);

  const [submitted] = useState(false);
  const { userName, password } = inputs;
  // const registering = useSelector(state => state.registration.registering);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(inputs)
    if (validate() === true) {
      if (role === false) {
        dispatch(verifyUser(inputs));
      }
      // console.log(window.localStorage.type )
      else {
        console.log("inside handlesubmit login", inputs);
        dispatch(verifyDoctor(inputs));
      }
    }
  }

  function setRole(e) {
    if (e.target.value === "Doctor") role = true;
  }

  function validate() {
    let usernameError = "";
    let passwordError = "";

    if (!inputs.userName) {
      usernameError = "your username cannot be blank!";
    }

    if (!inputs.password) {
      passwordError = "your password cannot be blank!";
    }

    if (usernameError || passwordError) {
      setInputs({ usernameError, passwordError });
      return false;
    }
    return true;
  }

  return (
    <div>
      <div
        className="container w-50 p-3 mt-5"
        style={{ backgroundColor: "#E3F2FD", borderRadius: "20px" }}
      >
        <form className="form-group mr-5 ml-5" onSubmit={handleSubmit}>
          <br />

          <h2>Login</h2>
          <br />
          <div className="form-group">
            {/* <label>Username</label> */}

            <BsFillPersonFill size={20} />
            <input
              placeholder="Username"
              type="text"
              name="userName"
              value={userName}
              onChange={handleChange}
              className={
                "form-control" + (submitted && !userName ? " is-invalid" : "")
              }
            />
            {submitted && !userName && (
              <div className="invalid-feedback">Username is required</div>
            )}
          </div>
          <div style={{ color: "red" }}>{inputs.usernameError}</div>
          <br></br>
          <div className="form-group">
            <BsLockFill size={20} />
            <input
              placeholder="password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className={
                "form-control" + (submitted && !password ? " is-invalid" : "")
              }
            />
            {submitted && !password && (
              <div className="invalid-feedback">Password is required</div>
            )}
          </div>
          <div style={{ color: "red" }}>{inputs.passwordError}</div>
          <br></br>
          <label>Your Role </label>
          {/* radio buttons */}
          <div onChange={setRole}>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Doctor"
              />
              <label className="form-check-label" for="inlineRadio1">
                Doctor
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Patient"
              />
              <label className="form-check-label" for="inlineRadio2">
                Patient
              </label>
            </div>
          </div>
          {/* radio buttons end */}

          <br></br>
          {/* buttons div */}
          <div className="form-group text-center">
            <br></br>

            <button className="btn btn-info">
              {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
              Login
            </button>
            <Link to="/signup" className="btn btn-link">
              Sign Up
            </Link>
          </div>
          {/* buttons div end */}
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
