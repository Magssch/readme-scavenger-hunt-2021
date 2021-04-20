import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import logo from "../assets/images/readmekuleny.png";

const LandingPage = () => {
  return (
    <Layout>
      <img
        src={logo}
        alt={"readme logo"}
        style={{
          height: "30vh",
          margin: "auto",
        }}
      />
      <p
        style={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        Velkommen til readmes store Scavenger Hunt! <br />
        <br />
        <b>
          <Link
            to={"/8RREUV7M/"}
            style={{ fontSize: "1.5rem", color: "black" }}
          >
            Trykk her for å starte jakten
          </Link>
        </b>
      </p>
    </Layout>
  );
};

export default LandingPage;
