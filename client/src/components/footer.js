import React from "react";
import { Card } from "react-bootstrap";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div
      className="row"
      style={{
        width: "100%",
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      <br />
      <Card border="primary" style={{ width: "50%" }}>
        <Card.Header>
          {" "}
          <h3>Our Mission</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>Available for everyone</Card.Title>
          <Card.Text>
            Making professional counseling accessible, affordable, convenient so
            anyone who struggles with life’s challenges can get help, anytime,
            anywhere.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="primary" style={{ width: "50%" }}>
        <Card.Header>
          <h3>Contact US</h3>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <TiSocialFacebookCircular size={40} />
            <TiSocialInstagramCircular size={40} />
            <TiSocialLinkedinCircular size={40} />
            <TiSocialTwitterCircular size={40} />
            <TiSocialYoutubeCircular size={40} />
          </Card.Title>
          <Card.Text>
            SpeakOut 990 Villa Street, Mountain View, CA 94041 //
            contact@Speakout.com
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Footer;
