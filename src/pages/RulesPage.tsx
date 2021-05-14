import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const RulesPage = () => {
  return (
    <Layout>
      <p>
        <h1>Viktig, les dette!</h1>
        <h2>
          Konkurransen er dessverre over for i år. Takk til de som deltok,
          kanskje vi jaktes til neste år?
        </h2>
        <h3>
          Du kan fortsatt prøve å finne første kode ved å løse oppgaven på neste
          side.
        </h3>
      </p>
      <br />
      <p
        style={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        <b>
          <Link
            to={"/start/8RREUV7M"}
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
