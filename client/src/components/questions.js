import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllQuestionsAndAnswers } from "../actions/AddQuestion";
import Footer from "./footer";
import { FaCommentMedical } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";
import { useState } from "react";


function QuestionsList() {
  const dispatch = useDispatch();

  const questionAndAnswersList = useSelector(
    (state) => state.GetAllQuestionsAndAnswers
  );

  useEffect(() => {
    dispatch(GetAllQuestionsAndAnswers());
  }, [dispatch]);

  const [questions, setQuestions] = useState({
    inputFilter: 'all',
  })

  function handleFilter(e) {

    setQuestions({
      inputFilter: e.target.value,
    })
    // console.log(e.target.value)
  }

  function onFilter() {

    return (
      <div>
        <label>Choose Counseling Type ..</label><br />
        <select name="inputFilter" onChange={handleFilter} value={questions.inputFilter}>
          <option value="all" selected="selected"> All </option>
          <option value="Teenager Counseling" > Teenager Counseling </option>
          <option value="Couple Counseling" > Couple Counseling </option>
          <option value="Individual Counseling" > Individual Counseling </option>
        </select>
      </div>
    )
  }
  var filterValue = false;
  if (questions.inputFilter === "all") {
    filterValue = true;
  }
  return (
    <div className="containe">
      <div>{onFilter()}</div>
      {filterValue === false ?
        <div
          className="container w-100"
          style={{
            textAlign: "left",
            backgroundColor: "#E3F2FD",
            alignSelf: "center",
            width: "100%",
          }}>
          <h2 style={{ marginLeft: 15, marginRight: 10, marginTop: 20 }}>
            {" "}
          Recent SpeakOut's
        </h2>

          {questionAndAnswersList.filter(question => question.questionType == questions.inputFilter).map(filteredQuestions => (
            <div
              style={{
                backgroundColor: "#FFB74D",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "blue",
                marginTop: 20,
                marginBottom: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              {/* user */}
              <div
                className="container"
                style={{
                  marginLeft: 15,
                  marginRight: 10,
                  marginTop: 25,
                  fontSize: 14,
                  height: "auto",
                }}
              >
                <FaCommentDots style={{ marginRight: 20 }} size={25} />
              Question: {filteredQuestions.question}
              </div>
              {/* doctor */}
              <div
                className="container"
                style={{
                  marginLeft: 15,
                  marginRight: 10,
                  marginBottom: 25,
                  marginTop: 10,
                  fontSize: 14,
                  height: "auto",
                }}
              >
                <FaCommentMedical style={{ marginRight: 20 }} size={25} />
              Answer by Dr. {filteredQuestions.doctorName}: {filteredQuestions.answer}
              </div>
            </div>
          ))}
        </div>
        :
        <div
          className="container w-100"
          style={{
            textAlign: "left",
            backgroundColor: "#E3F2FD",
            alignSelf: "center",
            width: "100%",
          }}>
          <h2 style={{ marginLeft: 15, marginRight: 10, marginTop: 20 }}>
            {" "}
          Recent SpeakOut's
        </h2>
          {questionAndAnswersList.map((questions) => (
            <div
              style={{
                backgroundColor: "#FFB74D",
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "blue",
                marginTop: 20,
                marginBottom: 20,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              {/* user */}
              <div
                className="container"
                style={{
                  marginLeft: 15,
                  marginRight: 10,
                  marginTop: 25,
                  fontSize: 14,
                  height: "auto",
                }}
              >
                <FaCommentDots style={{ marginRight: 20 }} size={25} />
              Question: {questions.question}
              </div>
              {/* doctor */}
              <div
                className="container"
                style={{
                  marginLeft: 15,
                  marginRight: 10,
                  marginBottom: 25,
                  marginTop: 10,
                  fontSize: 14,
                  height: "auto",
                }}
              >
                <FaCommentMedical style={{ marginRight: 20 }} size={25} />
              Answer by Dr. {questions.doctorName}: {questions.answer}
              </div>
            </div>
          ))}
          <br />
          <br />

          <br />
          <br />
          <Footer />
        </div>
      }

    </div>

  )


}

export default QuestionsList;
