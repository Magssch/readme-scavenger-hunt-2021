import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const RulesPage = () => {
  return (
    <Layout>
      <p>
        <h2>Viktig, les dette!</h2>
        <h3>
          Konkurransen er dessverre over for i år. Takk til de som deltok,
          kanskje vi jaktes til neste år?
        </h3>
        <h2>
          Du kan fortsatt prøve å finne første kode ved å løse oppgaven på neste
          side.
        </h2>
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
