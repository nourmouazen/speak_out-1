import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
// import {useDispatch ,useSelector}  from 'react-redux';

const url = "http://localhost:5000";

function ScheduleForDoctor() {
  // console.log(props.match.params,"props is ")
  const currentId = window.localStorage.doctorId;
  // const date = props.match.params.date

  const [doctorSchedule, setDoctorSchedule] = useState({
    schedules: [],
  });
  useEffect(() => {
    axios
      .get(`${url}/schedule/getScheduleForDoctor/${currentId}`)
      .then((res) => {
        setDoctorSchedule({ schedules: res.data });

        console.log(res.data);
        console.log(doctorSchedule.schedules, "hellllllllllllllooooooooooo");
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, [window.localStorage.doctorId]);

  return (
    <div className="col-lg-8 offset-lg-2">
      <br></br>
      <br></br>
      <h2>My Schedule</h2>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>End time</th>
          </tr>
        </thead>

        {doctorSchedule.schedules.map((schedule) => (
          <tbody>
            <td> {schedule.date}</td>
            <td>{schedule.startAt}</td>
            <td>{schedule.endAt}</td>
          </tbody>
        ))}
      </table>

      <Footer />
    </div>
  );
}
export default ScheduleForDoctor;
