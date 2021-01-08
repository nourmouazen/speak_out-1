import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/adduser";
import Footer from "./footer";

function UserProfile(props, setCurrentId) {
  //console.log(props)
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/users/getOneUser/+${window.localStorage.userId}`
      )
      .then((res) => {
        //console.log(res.data[0])
        setUser({
          userName: res.data[0].userName,
          age: res.data[0].age,
          gender: res.data[0].gender,
          email: res.data[0].email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [window.localStorage.userId]);
  return (
    <div>
      <div
        className="container w-100 p-3 mt-5"
        style={{
          textAlign: "left",
          fontSize: "14px",
          backgroundColor: "#E3F2FD",
          alignSelf: "center",
          width: "100%",
          height: "auto",
          borderRadius: 5,
        }}
      >
        {" "}
        <br />
        <div style={{ marginLeft: 10 }}>
          <h2 style={{ borderBottom: "5px solid silver" }}>
            {" "}
            {user.userName}'s Profile
          </h2>
        </div>
        <br />
        <div
          className="row"
          style={{
            textAlign: "left",

            alignSelf: "center",
            width: "800",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <br />

          <h4 style={{ marginLeft: 15 }}>User Name :</h4>

          <div
            className="col-sm-9 text-secondary "
            style={{
              textAlign: "left",
              marginLeft: 5,
              fontSize: 14,
            }}
          >
            {user.userName}
          </div>
        </div>
        {/* <hr> */}
        <div
          className="row"
          style={{
            textAlign: "left",

            alignSelf: "center",
            width: "800",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <h4 style={{ marginLeft: 15 }}>Age :</h4>

          <div
            className="col-sm-9 text-secondary"
            style={{
              textAlign: "left",
              marginLeft: 5,
              fontSize: 14,
            }}
          >
            {user.age}
          </div>
        </div>
        {/* </hr> */}
        <div
          className="row"
          style={{
            textAlign: "left",

            alignSelf: "center",
            width: "800",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <h4 style={{ marginLeft: 15 }}> Gender :</h4>

          <div
            className="col-sm-9 text-secondary"
            style={{
              textAlign: "left",
              marginLeft: 5,
              fontSize: 14,
            }}
          >
            {user.gender}
          </div>
        </div>
        <div
          className="row "
          style={{
            textAlign: "left",
            alignSelf: "center",
            width: "800",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <h4 style={{ marginLeft: 15 }}>Email :</h4>

          <div
            className="col-sm-9 text-secondary"
            style={{
              textAlign: "left",
              marginLeft: 5,
              fontSize: 14,
            }}
          >
            {user.email}
          </div>
        </div>
        {/* buttons div starts */}
        <br />
        <div
          style={{
            marginLeft: 10,
            alignItems: "center",
          }}
        >
          <Link
            type="button"
            className="btn btn-info btn-rounded  mr-2"
            to={`/edit/${window.localStorage.userId}`}
          >
            edit
          </Link>

          <Link
            type="button"
            className="btn btn-info btn-rounded mr-2 ml-2"
            to={"/video"}
          >
            Start Meeting
          </Link>

          {/* <Link
            type="button"
            className="btn btn-info btn-rounded mr-2 ml-2"
           
          >
            Delete
          </Link> */}

          <button
            // href="/"
            style={{ backgroundColor: "red", borderColor: "red" }}
            type="button"
            className="btn btn-dark btn-rounded  mr-2 ml-2"
            onClick={() => {
              return swal({
                title: "Are you sure?",
                text:
                  "Once deleted, you will not be able to retrun to this account!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              }).then((willDelete) => {
                if (willDelete) {
                  swal("Poof! Your account has been deleted!", {
                    icon: "success",
                  });
                  dispatch(deleteUser(window.localStorage.userId));
                  setInterval(function () {
                    logout();
                  }, 3000);
                } else {
                  swal("Your account is safe!");
                }
              });
            }}
          >
            delete
          </button>
          <br />
          <br />
          <br />
        </div>
        {/* buttons div ends*/}
      </div>

      <Footer />
    </div>
  );
}

function logout() {
  window.localStorage.clear();
  window.location = "/";
}

export default UserProfile;
