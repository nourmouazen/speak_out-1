import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
// import {useDispatch ,useSelector}  from 'react-redux';

const url = "http://localhost:5000";

function AppointmentList() {
  // console.log(props.match.params,"props is ")
  const currentId = window.localStorage.userId;
  // const date = props.match.params.date

  const [userAppointment, setUserAppointment] = useState({
    myAppointment: [],
  });
  useEffect(() => {
    axios
      .get(`${url}/appointment/getAppointmentForOneUser/${currentId}`)
      .then((res) => {
        setUserAppointment({ myAppointment: res.data });

        console.log(res.data);
        console.log(userAppointment.myAppointment[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [window.localStorage.userId]);

  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>My Appointment</h2>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>

        {userAppointment.myAppointment.map((appointment) => (
          <tbody>
            <td>{appointment.doctorName}</td>
            <td> {appointment.date}</td>
            <td>{appointment.startTime}</td>
          </tbody>
        ))}
      </table>

      <Footer />
    </div>
  );
}
export default AppointmentList;
