import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Layout from "./Layout";

interface CodeForwarderProps {
  paramCode: string;
}

const CodeForwarder: React.FC<CodeForwarderProps> = ({ paramCode }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showCurrentCode, setShowCurrentCode] = useState<boolean>(true);
  const [apiResponse, setApiResponse] = useState<string>("");
  const [code] = useState<string>(paramCode);
  const [previousCode, setPreviousCode] = useState<string>("");
  const [requestSuccessful, setRequestSuccessful] = useState<boolean>(false);

  const requestRiddle = () => {
    setLoading(true);
    setLoaded(true);
    fetch("./api/checkCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
        previous: previousCode,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setApiResponse(response.message);
        setShowCurrentCode(!response.last);
        setRequestSuccessful(true);
        setLoading(false);
      })
      .catch((err) => {
        setRequestSuccessful(false);
        setLoading(false);
      });
  };
  /*
  useEffect(() => {
    requestRiddle(code);
  }, [code]);
  */
  return (
    <Layout>
      <div style={{ margin: "3rem 0" }}>
        {loading ? (
          <LinearProgress />
        ) : !loaded ? (
          <>
            Skriv inn passordet du fikk på forrige QR-kode her. Hvis du ikke har
            husket å notere deg dette kan du se i nettleserhistorikken din,
            passordet er de åtte siste tegnene i URL-en du ble sendt til.
          </>
        ) : requestSuccessful ? (
          <>
            <b style={{ fontSize: "1.5rem" }}>{apiResponse}</b>
            {showCurrentCode ? (
              <>
                <br />
                <br />
                <i>
                  MERK! Noter deg passordet{" "}
                  <span
                    style={{
                      textDecoration: "underline",
                      fontWeight: "bolder",
                    }}
                  >
                    {code}
                  </span>{" "}
                  og fyll inn dette når du finner neste QR-kode.
                </i>
              </>
            ) : (
              <>
                <br />
                <br />
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "5rem",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  🎉🎉🎉
                </div>
              </>
            )}
          </>
        ) : (
          "Feil passord eller ugyldig URL."
        )}
      </div>
      <TextField
        id="outlined-basic"
        label="Passord (ABCDEFGH)"
        variant="outlined"
        disabled={loading}
        value={previousCode}
        onChange={(e) => setPreviousCode(e.target.value)}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        disabled={previousCode.length < 1 || loading}
        onClick={() => requestRiddle()}
      >
        Bekreft
      </Button>
    </Layout>
  );
};

export default CodeForwarder;
