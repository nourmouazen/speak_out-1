import React from "react";
import { useState } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
import Footer from "./footer";

import "react-datepicker/dist/react-datepicker.css";
function CreateDoctorsSchedule() {
  const [selectedDate, setSelectedDate] = useState({
    doctorId: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  //const [today, setDate] = useState(new Date());

  const handleChange = (name) => (event) => {
    setSelectedDate({ ...selectedDate, [name]: event.target.value });
    console.log(selectedDate);
  };
  function handleClick(e) {
    e.preventDefault();
    console.log(selectedDate);
    axios
      .post(
        `http://localhost:5000/schedule/createSchedule/` +
          `${window.localStorage.doctorId}`,
        { selectedDate }
      )
      .then((res) => {
        console.log(res, " this is a res from post image");
      })
      .catch((err) => {
        console.log("there is an errrrrrrrooooorrrr", err);
      });
  }
  return (
    <div>
      <div
        className="container w-50 p-3 mt-5"
        style={{ backgroundColor: "#E3F2FD", borderRadius: "20px" }}
      >
        <h2>Create Your Schedule</h2>
        <br />

        <form name="form">
          <div className="form-group">
            <label for="date">Date:</label>
            <br></br>
            <input
              type="date"
              class="form-control"
              id="date"
              value={selectedDate.date}
              selected={selectedDate}
              onChange={handleChange("date")}
              dateFormat="yyyy/MM/dd"
            />
          </div>
          <div className="form-group">
            <label for="str">startTime:</label>
            <input
              type="time"
              class="form-control"
              id="str"
              value={selectedDate.startTime}
              onChange={handleChange("startTime")}
            />
          </div>
          <div className="form-group">
            <label for="end">End Time:</label>
            <input
              type="time"
              class="form-control"
              id="end"
              value={selectedDate.endTime}
              onChange={handleChange("endTime")}
            />
          </div>
          <button className="btn btn-info" type="submit" onClick={handleClick}>
            Add to the Schedule{" "}
          </button>
          <br />
        </form>
        <br />
        <Link
          type="button"
          className="btn btn-info btn-rounded mr-2 ml-2"
          to={"/AppointmentListForOneDoctor/:id"}
        >
          My Schedule{" "}
        </Link>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
export default CreateDoctorsSchedule;
