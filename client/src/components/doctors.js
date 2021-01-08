import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiVideo } from "react-icons/ti";

const Doctors = (props) => {
  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/getAllDoctors")
      .then((res) => {
        setDoctor(res.data);
      })
      .catch((err) => {
        alert("Error fetching doctors List!");
      });
  });

  return (
    <div>
      <div
        className="container w-100"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        {/* main container start */}
        <div
          className="container w-100"
          style={{
            textAlign: "left",
            backgroundColor: "#E3F2FD",
            alignSelf: "center",
            width: "100%",
          }}
        >
          {doctors.map((doctor, index) => (
            <div
              className="row"
              key={doctor.doctorId}
              style={{ borderBottom: "20px solid white" }}
            >
              <div className="col pt-3 pb-2">
                <div className="row">
                  <div className="col-md-10">
                    {/* Doctor name container */}
                    <h3>DR. {doctor.doctorName}</h3>
                    <img
                      alt="not found"
                      src={doctor.image}
                      className="rounded-circle z-depth-2"
                      style={{ width: 200, height: 200 }}
                    />
                    <br />
                    <h4>
                      {" "}
                      <Badge pill variant="secondary" style={{ marginTop: 20 }}>
                        {doctor.email}
                      </Badge>
                    </h4>
                    <br />
                    <h4> Doctor Speciality: {doctor.doctorSpeciality}</h4>
                    <p
                      className="lead mt-4 mb-5"
                      style={{
                        backgroundColor: "#FFB74D",
                        borderRadius: 10,
                        width: 900,
                        height: "auto",
                        fontSize: 14,
                        borderWidth: 1,
                        borderColor: "blue",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        paddingRight: 15,
                        paddingLeft: 15,
                        paddingTop: 15,
                        paddingBottom: 15,
                      }}
                    >
                      {doctor.bio}
                    </p>

                    <div style={{ marginBottom: 30 }}>
                      <Link
                        to={`/bookAppointment/${doctor.doctorId}`}
                        className="btn btn-info"
                        style={{
                          textAlign: "center",
                          fontSize: "12px",
                        }}
                      >
                        Book A Video Session
                        <TiVideo size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Doctors;
