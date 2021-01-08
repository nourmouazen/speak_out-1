import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

import axios from "axios";
var ratingValue = 0;
const StarRating = () => {
  const [rating, setRating] = useState({
      doctor_Id :"",
      rate : "",
      
    });
  const [hover, setHover] = useState(0);

  const [doctors, setDoctor] = useState({
    doctor :[]
  });
  useEffect(() => {

    axios
      // to get all doctor names inside the dropdown list
      .get("http://localhost:5000/doctor/getAllDoctors")
      .then((res) => {
        setDoctor({doctor : res.data});
      })
      .catch((err) => {
        alert("Error fetching doctors List!");
      });
  });
  const handleChange = (e)=>{
    // e.preventDefault();
    const {name,value} = e.target;
  
    setRating((rating) =>({
      ...rating,
      [name] :value,
    }));
    console.log(rating.doctorId , rating.rate);
    // console.log(e.target.value)

    // console.log(rating.rate , ratingValue, "rattttttttttttttttttteee")
  
  }
  const handleSubmit = ( e)=>{
    const id= window.localStorage.userId;
    console.log(id,rating)
    // e.preventDefault();
    const {name ,value} = e.target;
    console.log(rating, "rattttttttttttttttttteee")
    // console
    axios.post( `http://localhost:5000/doctor/postRating/${id}`, {rating} )
    
    .then((res) => {
      console.log(res, " this is a res from post image");
    })
    .catch((err) => {
      console.log("there is an errrrrrrrooooorrrr", err);
    });
  }
  return (
    <div className="main container">
      <form className="ratingForm " onSubmit={handleSubmit}>
        <h1> RATE DOCTOR FORM</h1>
        <br />
        <label className=" ml-2 mr-2">Doctor Name: </label>

        <select name="doctor_Id" value ={rating.doctor_Id} onChange = {handleChange}>
          {doctors.doctor.map((oneDoctor) => (
            <option value={oneDoctor.doctorId}>{oneDoctor.doctorName}</option>
         
         ))}
        </select>
      
        <br />
        <br />
        {/* STAAAAAAAAAAAAAAAAAR RATINNNNNGGG */}
        <div className="starRating">
          {[...Array(5)].map((star, i) => {
             ratingValue = i + 1;
            return (
              <label>                
                 <input
                   type="radio"
                  name="rate"
                  value={ratingValue}
                  // value={ratingValue}
              //     onChange = {handleChange}
              onClick={() => setRating((rate)=>({...rate , rate:ratingValue}))}
                  // onClick={() =>{ setRating({rate:ratingValue}) 
                  // console.log(rating.rate , "helllooooooo rate")}}
                onChange ={handleChange}
              />
                <FaStar
                  className="star"
                  color={
                    ratingValue <= (hover || rating.rate) ? "#ffc107" : "#e4e5e9"
                  }
                  size={20}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
               </label>
            );
          })}
          {/* <p> {rating} out of 5 !</p> */}
        </div>
        {/* STAAAAAAAAAAAAAAAAAR RATINNNNNGGG */}

        <br />
        <button
          className="btn btn-danger "
          style={{
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.2)",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 23,
            backgroundColor: "grey",
            borderRadius: 30,
          }}>
          Submit
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default StarRating;
