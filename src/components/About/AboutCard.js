import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashwin Nair </span>
            from <span className="purple"> Boston, MA</span>
            <br />
            A Software developer with <span className="purple">2 years</span>  of industry experience building full stack web applications.
            <br />
            Currently persuing my Masters in Information Systems from Northeastern University with a GPA <span className="purple">3.84</span>
            <br />
            My coursework includes courses on Web developemnt, Application Developemnt engineering(Java), DataBase Design (SQL), Data structures and Algorithms, Cloud
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Travel and Explore
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Ukulele
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always nurture a childlike sense of curiosity and wonder."{" "}
          </p>
          <footer className="blockquote-footer">Ashwin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
