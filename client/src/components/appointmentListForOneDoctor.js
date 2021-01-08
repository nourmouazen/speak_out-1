import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";

const url = "http://localhost:5000";

function AppointmentListForOneDoctor() {
  // console.log(props.match.params,"props is ")
  const currentId = window.localStorage.doctorId;
  // const date = props.match.params.date

  const [doctorAppointment, setdoctorAppointment] = useState({
    appointment: [],
  });
  useEffect(() => {
    axios
      .get(`${url}/appointment/getAppointmentForDoctor/${currentId}`)
      .then((res) => {
        setdoctorAppointment({ appointment: res.data });

        //  console.log(res.data)
        //  console.log(doctorAppointment.appointment , "hiiiiiiiiiiiiiiiiiiiii")
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [window.localStorage.doctorId]);

  return (
    <div>
      <div
        className="container w-50 p-3 mt-5"
        style={{
          backgroundColor: "#E3F2FD",
          borderRadius: "20px",
          height: "auto",
        }}
      >
        <h2>Patients Appointment</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Patient Name</th>
              <th>Date</th>
              <th> Time</th>
            </tr>
          </thead>

          {doctorAppointment.appointment.map((appointment) => (
            <tbody>
              <td>{appointment.userName}</td>
              <td> {appointment.date}</td>
              <td>{appointment.startTime}</td>
            </tbody>
          ))}
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default AppointmentListForOneDoctor;
