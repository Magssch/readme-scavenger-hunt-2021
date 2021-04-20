import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const RulesPage = () => {
  return (
    <Layout>
      <p>
        <h2>Viktig, les dette!</h2>
        <h3>
          Husk å notere deg passordene du får underveis, du vil trenge dette
          passordet når du finner neste QR-kode. Ta gjerne skjermbilde av både
          gåten og passordet når du finner en QR-kode, slik at du har dette lett
          tilgjengelig senere.
        </h3>
      </p>
      <p>
        Kommer du deg ikke lengre? Har du lett overalt, men finner ingen
        QR-kode? Det er ingen garanti for at noen finner alle kodene. Send et
        bilde av den siste QR-koden du finner til{" "}
        <b>scavengerhunt[at]abakus.no</b>, så kan du fortsatt være med i
        trekningen! Vi kan også gi deg et hint dersom du ønsker det.
      </p>
      <p
        style={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        <b>
          <Link
            to={"/8RREUV7M"}
            style={{ fontSize: "1.75rem", color: "black" }}
          >
            Gå til første oppgave
          </Link>
        </b>
      </p>
    </Layout>
  );
};

export default RulesPage;
