//import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Adduser } from "../actions/adduser";
import { BsFillPersonFill } from "react-icons/bs";

import { BsFillEnvelopeFill } from "react-icons/bs";
import { GiAges } from "react-icons/gi";
import { BsLockFill } from "react-icons/bs";
import { CgGenderFemale } from "react-icons/cg";
import { CgGenderMale } from "react-icons/cg";
import Footer from "./footer";

function Signup() {
  const [user, setUser] = useState({
    userName: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });
  const [userE, setUserE] = useState({
    usernameError: "",
    ageError: "",
    genderError: "",
    emailError: "",
    passwordError: "",
  });

  const [submitted] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  }

  function handleValidation() {
    return validate();
  }
  function handleDis() {
    dispatch(Adduser(user));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (handleValidation()) {
      handleDis();
      //console.log( window.localStorage.type)
      window.location = "/login";
    }
  }
  function validate() {
    let usernameError = "";
    let ageError = "";
    let genderError = "";
    let emailError = "";
    let passwordError = "";

    console.log(user.userName);

    if (!user.userName) {
      usernameError =
        "your username cannot be blank, please try to make it more than 3 characters!";
    } else if (user.userName.length > 0 && user.userName.length <= 3) {
      usernameError = "your username cannot be less than 3 characters!";
    }
    if (!user.age) {
      ageError = "your age cannot be blank, please write your true age!";
    }
    if (!user.gender) {
      genderError =
        "your gender cannot be blank, please write your gender(Male/Female)!";
    } else if (user.userName.length > 0 && user.userName.length <= 3) {
      usernameError = "your username cannot be less than 3 characters!";
    }

    if (!user.email) {
      emailError =
        "your email cannot be blank, please try to write a correct email";
    }
    if (!user.password) {
      passwordError =
        "your password cannot be blank, please try to make it more than 8 characters";
    } else if (user.password.length > 0 && user.password.length < 8) {
      passwordError = "your password cannot be less than 8 characters";
    }

    if (
      usernameError ||
      ageError ||
      genderError ||
      emailError ||
      passwordError
    ) {
      setUserE({
        usernameError,
        ageError,
        genderError,
        emailError,
        passwordError,
      });
      return false;
    }
    //setUser({user.userName, user.age, user.gender, user.email, user.password})
    return true;
  }

  return (
    <di>
      <div
        className="container w-50 p-3 mt-5"
        style={{ backgroundColor: "#E3F2FD", borderRadius: "20px" }}
      >
        <br />
        <form className="form-group mr-5 ml-5">
          <h2>Signup</h2>
          <br />
          <div className="form-group ">
            <BsFillPersonFill size={20} />
            <input
              type="text"
              placeholder="Username"
              name="userName"
              value={user.userName}
              onChange={handleChange}
              required
              className={
                "form-control" +
                (submitted && !user.userName ? " is-invalid" : "")
              }
            />
            {submitted && !user.userName && (
              <div className="invalid-feedback">Username is required</div>
            )}
            <div style={{ color: "red" }}>{userE.usernameError}</div>
            <br></br>
          </div>
          <div className="form-group">
            <GiAges size={20} />
            <input
              placeholder="age"
              type="text"
              name="age"
              value={user.age}
              onChange={handleChange}
              required
              className={
                "form-control" + (submitted && !user.age ? " is-invalid" : "")
              }
            />
            {submitted && !user.age && (
              <div className="invalid-feedback">Age is required</div>
            )}
          </div>
          <div style={{ color: "red" }}>{userE.ageError}</div>
          <br></br>
          <div className="form-group">
            <CgGenderFemale size={20} style={{ marginRight: "0" }} />{" "}
            <CgGenderMale size={20} style={{ marginLeft: "0" }} />
            <input
              placeholder="gender"
              type="text"
              name="gender"
              value={user.gender}
              onChange={handleChange}
              required
              className={
                "form-control" +
                (submitted && !user.gender ? " is-invalid" : "")
              }
            />
            {submitted && !user.gender && (
              <div className="invalid-feedback">gender is required</div>
            )}
          </div>
          <div style={{ color: "red" }}>{userE.genderError}</div>
          <br></br>
          <div className="form-group">
            <BsFillEnvelopeFill size={20} />
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              className={
                "form-control" + (submitted && !user.email ? " is-invalid" : "")
              }
            />
            {submitted && !user.email && (
              <div className="invalid-feedback">Email is required</div>
            )}
          </div>
          <div style={{ color: "red" }}>{userE.emailError}</div>
          <br></br>
          <div className="form-group">
            <BsLockFill size={20} />
            <input
              placeholder="password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              className={
                "form-control" +
                (submitted && !user.password ? " is-invalid" : "")
              }
            />
            {submitted && !user.password && (
              <div className="invalid-feedback">Password is required</div>
            )}
          </div>
          <div style={{ color: "red" }}>{userE.passwordError}</div>
          <br></br>
          {/* button div */}
          <div className="form-group text-center">
            <button
              type="submit"
              className="btn btn-info"
              onClick={handleSubmit}
            >
              {/* {registering && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
              Sign Up
            </button>
            {/* <Link to="/login" className="btn btn-link">Cancel</Link> */}
          </div>
          {/* button div ends */}
        </form>
      </div>

      <Footer />
    </di>
  );
}
export default Signup;
