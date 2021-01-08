import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddQuestions } from "../actions/AddQuestion";
import { Button } from "react-bootstrap";
import Footer from "./footer";

function AddQ() {
  const [questions, setQuestion] = useState({
    question: "",
    user_Id: window.localStorage.userId,
    questionType: "Individual Counseling",
  });

  // const { question, questionType } = questions;

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setQuestion((questions) => ({ ...questions, [name]: value }));
  }

  function handleSubmit(e) {
    // console.log(questions);
    e.preventDefault();
    dispatch(AddQuestions(questions));
    window.location = "/questions";
  }

  return (
    <div
      className="container w-100"
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <div
        className="container w-100"
        style={{
          textAlign: "left",
          backgroundColor: "#E3F2FD",
          alignSelf: "center",
          width: "100%",
          height: "auto",
          borderRadius: 5,
        }}
      >
        <br />
        <br />
        <h3>
          Relax,Speak Out your issue, and one of our counslers will support you
          as soon as possible!{" "}
        </h3>
        <h5>
          {" "}
          explain to us how do you feel ? .. express your feelings and thoughts
        </h5>

        <form
          onSubmit={handleSubmit}
          style={{ marginTop: 30, marginBottom: 30 }}
        >
          <label>Choose Counseling Type</label>
          <br />
          <select
            name="questionType"
            onChange={handleChange}
            value={questions.questionType}
          >
            <option value="Teenager Counseling"> Teenager Counseling </option>
            <option value="Couple Counseling"> Couple Counseling </option>
            <option value="Individual Counseling">
              {" "}
              Individual Counseling{" "}
            </option>
          </select>
          <br />
          <br />
          <textarea
            style={{ width: 900, height: "auto" }}
            type="text"
            name="question"
            value={questions.question}
            onChange={handleChange}
          />
          <br />

          <Button
            className="button"
            type="submit"
            size="lg"
            style={{ width: "auto", marginTop: 30, height: 30 }}
          >
            SpeakOut
          </Button>
          <br />
          <br />
          <br />
          <h6> Stay Strong .. everything shall pass </h6>
        </form>
        <br />

        <Footer />
      </div>
    </div>
  );
}
export default AddQ;
