import React from "react";
import { Badge } from "react-bootstrap";
import Footer from "./footer";

const Articles = () => {
  return (
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
        <br />
        <h2>Selected articles - Topics in Mental Health</h2>
        <br />
        <div
          className="article1"
          style={{
            borderBottom: "5px solid silver",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/voice/to-live-i-had-no-choice-but-to-make-friends-with-my-depression"
            >
              To live, I had no choice but to make friends with my depression
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
        <div
          className="article2"
          style={{
            borderBottom: "5px solid silver",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          {" "}
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/the-bigger-picture/joe-caslin-and-a-lust-for-life-unite-to-unveil-giant-mental-health-artwork-in-waterford"
            >
              Joe Caslin and A Lust for Life unite to unveil giant mental health
              artwork in Waterford
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
        <div
          className="article3"
          style={{
            borderBottom: "5px solid silver",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          {" "}
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/tools/mental-health/infant-mental-health-a-critical-window-of-opportunity-for-future-wellbeing-and-mental-health"
            >
              Infant mental health: A critical window of opportunity for future
              wellbeing and mental health
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
        <div
          className="article4"
          style={{
            borderBottom: "5px solid silver",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          {" "}
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/tools/mental-health/how-to-support-children-to-worry-less-and-develop-mental-fitness"
            >
              How to support children to worry less and develop mental fitness
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
        <div
          className="article5"
          style={{
            borderBottom: "5px solid silver",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          {" "}
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/tools/mental-health/when-good-mental-health-is-not-good-enough-we-need-to-focus-on-wellness"
            >
              When good mental health is not good enough: we need to focus on
              wellness
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
        <div
          className="article6"
          style={{
            borderBottom: "5px solid silver",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          {" "}
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/the-bigger-picture/why-taking-a-break-from-alcohol-will-be-the-best-decision-you-ever-made"
            >
              Why taking a break from alcohol will be the best decision you ever
              made
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
        <div
          className="article7"
          style={{
            borderBottom: "5px solid silver",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          {" "}
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/voice/i-sprained-my-mental-health"
            >
              I sprained my mental health
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
        <div
          className="article8"
          style={{
            borderBottom: "5px solid silver",
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          {" "}
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/tools/mental-health/practical-tips-for-parents-to-help-keep-children-safer-online"
            >
              Practical tips for parents to help keep children safer online
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
        <div
          className="article8"
          style={{
            marginBottom: 5,
            marginTop: 5,
          }}
        >
          {" "}
          <h4>
            Article Title:{" "}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.alustforlife.com/tools/mental-health/its-good-to-talk"
            >
              It’s good to talk
            </a>{" "}
            <Badge
              pill
              variant="secondary"
              style={{ backgroundColor: "#E65100" }}
            >
              New
            </Badge>{" "}
          </h4>
          <br />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Articles;
