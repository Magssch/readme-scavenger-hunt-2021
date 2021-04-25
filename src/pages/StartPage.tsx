import React from "react";
import Layout from "../components/Layout";

const StartPage = () => {
  return (
    <Layout>
      <h3>
        For å finne første QR-kode må du først finne koordinatene til denne ved
        hjelp av bildene i den tilhørende artikkelen i readme. Når du har løst
        oppgaven kan du søke på koordinatene du har funnet i Google for å finne
        lokasjonen til første QR-kode.
      </h3>
      <p>
        <h4>Koordinatene skal være på formen:</h4>
        <pre>
          LATITUDE:&nbsp;&nbsp;&nbsp;<b>AA . BBCCDD</b> <br />
          LONGITUDE:&nbsp;&nbsp;<b>EE . FFGGHH</b>
        </pre>
      </p>
      <p>
        <h4>
          Latitudekoordinatene finner dere ved å se på bildet av kontoret:
        </h4>
        <b>AA:</b> (Antall kontrollere på bildet)² - 1.
        <br />
        <b>BB:</b> ((Antall svarte ryggputer på bildet) x (Antall stikkontakter
        på bildet)) - 1
        <br />
        <b>CC:</b> (Antall midtsidebilder på veggen på bildet) x (Antall røde
        sofaputer på bildet)
        <br />
        <b>DD:</b> (Antall pokaler på bildet) x 20
        <br />
      </p>

      <p>
        <h4>
          Longitudekoordinatene finner dere ved å se på bildet av inngangen til
          Hovedbygget:
        </h4>
        <b>EE:</b> (Antall trappetrinn) + 1<br />
        <b>FF:</b> (Antall glassvinduer <b>på dørene</b>) + EE
        <br />
        <b>GG:</b> (Antall dørhåndtak) x 25
        <br />
        <b>HH:</b> ((Antall nøkkelhull) x 10) - 1
        <br />
      </p>
      <h3>
        <b>
          Noter deg passordet{" "}
          <span style={{ textDecoration: "underline", fontWeight: "bolder" }}>
            8RREUV7M
          </span>{" "}
          og skriv inn dette når du har scannet koden og blir bedt om å fylle
          inn passord.
        </b>
      </h3>
    </Layout>
  );
};

export default StartPage;
