import React, { useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const StyledCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.8) !important;
  margin: auto;
  width: 95%;
  max-width: 700px;
  min-height: 60%;
  display: flex;
`;

const StyledCardContent = styled(CardContent)`
  max-width: 600px;
  margin: 1rem auto;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: Town31Dim;
  margin: 0;
`;

interface CodeForwarderProps {
  paramCode: string;
}

const CodeForwarder: React.FC<CodeForwarderProps> = ({ paramCode }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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
    <StyledCard>
      <StyledCardContent>
        <Title>readme Scavenger Hunt 2021</Title>
        <div style={{ margin: "auto 0" }}>
          {loading ? (
            <LinearProgress />
          ) : !loaded ? (
            "Bekreft forrige kode for å gå videre."
          ) : requestSuccessful ? (
            <>
              <b>{apiResponse}</b>
              <br />
              <br />
              <i>
                Noter deg koden <b>{code}</b> og fyll inn denne når du finner
                neste QR-kode.
              </i>
            </>
          ) : (
            "Feil kode eller ugyldig URL."
          )}
        </div>
        <TextField
          id="outlined-basic"
          label="Skriv inn forrige kode"
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
      </StyledCardContent>
    </StyledCard>
  );
};

export default CodeForwarder;
