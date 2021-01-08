import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Card } from "react-bootstrap";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#E3F2FD" }}>
      {/* slider */}
      <div>
        {/* Carousel begins */}
        <Carousel style={{ marginBottom: 100 }}>
          <Carousel.Item>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "./Images/one.jpg"}
              alt="not found"
              width="100%"
              height="500px"
            ></img>
            <Carousel.Caption>
              {/* <p>this is the first caption</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "./Images/two.jpg"}
              alt="not found"
              width="100%"
              height="500px"
            ></img>
            <Carousel.Caption>
              {/* <p>this is the second caption</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "./Images/three.jpg"}
              alt="not found"
              width="100%"
              height="500px"
            ></img>
            <Carousel.Caption>
              {/* <p>this is the third caption</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* Carousel ends */}
      </div>

      {/* feedback */}
      <div>
        <h1 style={{ textAlign: "center", marginBottom: 50 }}>
          {" "}
          Patients Feedback on SpeakOut
        </h1>
      </div>
      <div
        className="row"
        style={{
          width: "100%",
          marginLeft: 2,
          marginRight: 2,
          textAlign: "center",
        }}
      >
        {/* person1 */}
        <Card border="primary" style={{ width: "33%" }}>
          <Card.Header>
            <h4>Christopher Hunt</h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <img
                src={process.env.PUBLIC_URL + "./Images/person4.jpg"}
                className="rounded-circle"
                alt="woman avatar"
                style={{ width: 150, height: 150 }}
              />
            </Card.Title>
            <Card.Text>
              "The biggest achievement I've made is, truly, fighting for myself.
              Through working with Aiko and taking the time to discuss various
              issues with her, I've become a bigger advocate for myself, and I'm
              so proud of that."
            </Card.Text>
          </Card.Body>
          {/* person2 */}
        </Card>
        <Card border="primary" style={{ width: "33%" }}>
          <Card.Header>
            <h4>Nicole Kirkpatrick</h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <img
                src={process.env.PUBLIC_URL + "./Images/person7.jpg"}
                className="rounded-circle"
                alt="woman avatar"
                style={{ width: 150, height: 150 }}
              />
            </Card.Title>
            <Card.Text>
              "I have now been working with Sheilah on BetterHelp for about 4
              weeks, and can confidently say that I am a lot less anxious about
              my career path now than when I first signed up...I am so much
              better off now than I was before."
            </Card.Text>
          </Card.Body>
          {/* person3 */}
        </Card>
        <Card border="primary" style={{ width: "33%" }}>
          <Card.Header>
            {" "}
            <h4>Mitchell Blocker</h4>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <img
                src={process.env.PUBLIC_URL + "./Images/person3.jpg"}
                className="rounded-circle"
                alt="woman avatar"
                style={{ width: 150, height: 150 }}
              />
            </Card.Title>
            <Card.Text>
              "I am a totally different person now than when I signed up 19
              months ago. I have found my voice and can speak up for myself
              now....My confidence level is also better than it ever has been."
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: 60,
          marginTop: 60,
        }}
      >
        {/* Qoute starts */}
        <Card style={{ backgroundColor: "#E3F2FD" }}>
          <Card.Body>
            <blockquote
              className="blockquote mb-5"
              style={{ borderColor: "primary" }}
            >
              <h2>
                “What mental health needs is more sunlight, more candor, and
                more unashamed conversation.”
              </h2>
              <footer className="blockquote-footer"> – Glenn Close</footer>
            </blockquote>

            <Link
              to={"/askQuestions"}
              className="btn btn-info  "
              style={{ width: "150px" }}
            >
              Speak Out
            </Link>
          </Card.Body>
        </Card>

        {/* qoute ends */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
