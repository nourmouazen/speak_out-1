import React, { useEffect } from "react";
import { useState } from "react";
import { GetQuestions } from ".././actions/AddQuestion";
import { createAnswer } from "../actions/AddQuestion";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Footer from "./footer";

import { FaQuestionCircle } from "react-icons/fa";

function DoctorQuestions() {
  // Get All Questions ..
  const dispatch = useDispatch();
  const AddQuestion = useSelector((state) => state.AddQuestions);
  useEffect(() => {
    dispatch(GetQuestions());
  }, [dispatch]);

  // Take The Input Value ..
  const [answers, setAnswer] = useState({
    answer: "",
    questionId: "",
    doctorId: "",
  });

  function handleChange(e) {
    setAnswer({
      answer: e.target.value,
      questionId: e.target.name,
      doctorId: window.localStorage.doctorId,
    });
    console.log(answers, "from component");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(AddQuestion);
    dispatch(createAnswer(answers));

    window.location = "/questions";
  }

  return (
    <div>
      <div className="container w-100">
        <div>
          <div
            className="container w-100"
            style={{
              textAlign: "left",
              backgroundColor: "#E3F2FD",
              alignSelf: "center",
              width: "100%",
            }}
          >
            <h2>Doctor Questions Page</h2>
            {AddQuestion.map((question, index) => (
              <div key={index}>
                <h3>
                  {" "}
                  <FaQuestionCircle
                    size={30}
                    style={{ marginRight: 10, marginLeft: 3 }}
                  />
                  {question.question}
                </h3>
                <br />
                <form
                  onSubmit={handleSubmit}
                  style={{ borderBottom: "1px solid silver" }}
                >
                  <div key={index}>
                    <textarea
                      style={{ width: 900, height: "auto" }}
                      name={question.questionId}
                      value={answers.answer.key}
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <Button
                    type="submit"
                    variant="info"
                    style={{ width: "8%", marginBottom: 20 }}
                  >
                    Reply
                  </Button>
                </form>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default DoctorQuestions;
