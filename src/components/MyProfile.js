import React from "react";
import profileImg from "../profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faGithub,
  faBlogger
} from "@fortawesome/free-brands-svg-icons";

function MyProfile() {
  return (
    <div
      style={{
        border: "2px solid",
        backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
        display: "flex",
        fontFamily: "Comic Sans MS"
      }}
    >
      <div
        className="container"
        style={{
          height: "100vh",
          margin: 0,
          paddingTop: 20,
          textAlign: "center"
        }}
      >
        <img
          src={profileImg}
          alt="profile"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "3px #00ff00 solid"
          }}
        />
        <h3>
          My name is{" "}
          <span style={{ color: "#2f2fff" }}>Nattapon Chitnarong</span>
        </h3>
        <h5>
          My nickname is <span style={{ color: "#ff00bf" }}>Smart</span>
        </h5>
        <div style={{ marginTop: 50 }}>
          <a href="https://www.facebook.com/Smartskn">
            <FontAwesomeIcon
              style={{ width: "10%", height: "10%", textDecoration: "none" }}
              icon={faFacebook}
            />{" "}
          </a>
          <a href="https://smartblog.netlify.com/ ">
            <FontAwesomeIcon
              style={{ width: "10%", height: "10%", textDecoration: "none" }}
              icon={faBlogger}
            />{" "}
          </a>
          <a href="https://www.youtube.com/user/nattaponchitnarong/videos?view_as=subscriber">
            <FontAwesomeIcon
              style={{ width: "10%", height: "10%", textDecoration: "none" }}
              icon={faYoutube}
            />{" "}
          </a>
          <a href="https://github.com/smarty0123">
            <FontAwesomeIcon
              style={{ width: "10%", height: "10%", textDecoration: "none" }}
              icon={faGithub}
            />{" "}
          </a>
        </div>
      </div>
      <div
        className="container"
        style={{
          textAlign: "center"
        }}
      >
        <div style={{ paddingTop: 20 }}>
          <h3>PERSONAL INFORMATION</h3>
          <p>Date of Birth: December 23, 1996</p>
          <p>Nationality: Thai</p>
          <p>Age: 22</p>
        </div>
        <div style={{ paddingTop: 20 }}>
          <h3>EDUCATION</h3>
          <p>Math-Science at Suankularb Wittayalai Nonthaburi School</p>
          <p>
            Information Technology at King Mongkut's Institute of Technology
            Ladkrabang
          </p>
        </div>
        <div style={{ paddingTop: 20 }}>
          <h3>CONTACT</h3>
          <p>Email: smarty_0123@hotmail.com</p>
          <p>Phone Number: 0918185882</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
