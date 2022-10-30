import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillCamera } from "react-icons/ai";
import { ImAirplane, ImPointRight } from "react-icons/im";
import { SiNintendoswitch } from "react-icons/si";
import { GiForkKnifeSpoon } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">George Alexiou </span>
            from <span className="purple"> Athens, Greece</span>. I currently
            live in <span className="purple"> London, UK</span> working as a
            Full-Stack Software Engineer.
            <br />I am a Computer Science MEng graduate from the{" "}
            <span className="purple"> University of Southampton</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiFillCamera /> Photography
            </li>
            <li className="about-activity">
              <SiNintendoswitch /> Video Games
            </li>
            <li className="about-activity">
              <ImAirplane /> Travelling
            </li>
            <li className="about-activity">
              <GiForkKnifeSpoon /> Cooking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
