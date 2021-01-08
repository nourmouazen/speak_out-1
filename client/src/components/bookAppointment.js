import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { bookAppointment } from "../actions/Appointment";
import Footer from "./footer";

const url = "http://localhost:5000";

function BookAppointment(props, { currentId, setCurrrentId }) {
  // console.log(props.match.params,"props is ")
  currentId = props.match.params.id;
  // const date = props.match.params.date
  const dispatch = useDispatch();
  const [schedules, setSchedule] = useState({
    schedule: [],
  });

  const [appointmentInfo, setAppointment] = useState({
    date: "",
    startTime: "",
    endtime: "",
  });

  // setAppointment(user_Id => ({ ...user_Id,["user_Id"] :window.localStorage.userId}))
  // setAppointment(doctor_Id => ({ ...doctor_Id,["doctor_Id"] :currentId}))

  function handleSchedule(e) {
    const { name, value } = e.target;
    setAppointment((date) => ({ ...date, [name]: value }));
    // dispatch(getScheduleForUser(currentId))
    const date = e.target.value;
    console.log(date);
    axios
      .get(`${url}/schedule/getScheduleForUser/${currentId}/${date}`)
      .then((res) => {
        setSchedule({ schedule: res.data });
        console.log(res.data);
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    // appointmentInfo.doctor_Id = currentId;
    // appointmentInfo.user_Id = window.localStorage.userId
    setAppointment((appointmentInfo) => ({
      ...appointmentInfo,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const userId = window.localStorage.userId;
    console.log(userId);
    dispatch(bookAppointment(currentId, userId, appointmentInfo));
    window.location = `/appointmentList/${window.localStorage.userId}`;
    // `<Redirect to={{ pathname: '/appointmentList/'+${window.localStorage.userId}, state: { from: ${props.location } }}/>`
  }
  return (
    <div>
      <div
        className="container w-50 p-3 mt-5"
        style={{
          backgroundColor: "#E3F2FD",
          borderRadius: "20px",
          height: "250px",
        }}
      >
        <h2>Book a Video Session</h2>
        <form
          name="form"
          onSubmit={handleSubmit}
          style={{ paddingRight: 4, paddingLeft: 4, paddingTop: 15 }}
        >
          <div className="form-group row">
            <label for="example-date-input" className="col-2 col-form-label">
              Date
            </label>
            <div class="col-10">
              <input
                className="form-control"
                type="date"
                name="date"
                value={appointmentInfo.date}
                id="example-date-input"
                onChange={handleSchedule}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-2 col-form-label">Start Time: </label>
            <div class="col-10">
              <select
                className="form-control"
                // value={schedules.schedule.startAt}
                value={appointmentInfo.startTime}
                onChange={handleChange}
                name="startTime"
                required
              >
                <option></option>
                {schedules.schedule.map(function (schedule) {
                  return (
                    <option
                      key={schedule.scheduleId}
                      value={schedule.scheduleId}
                    >
                      {schedule.startAt} - {schedule.endAt}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div
            className="form-group"
            style={{ textAlign: "center", marginTop: 30, marginBottom: 30 }}
          >
            <button className="btn btn-info">book Appointement</button>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default BookAppointment;
