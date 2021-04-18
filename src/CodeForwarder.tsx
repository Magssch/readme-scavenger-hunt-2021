import React, { useEffect, useState } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";

const StyledCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.8) !important;
  margin: auto;
  width: 95%;
  height: 60%;
  display: flex;
`;

const StyledCardContent = styled(CardContent)`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

interface CodeForwarderProps {
  code: string;
}

const CodeForwarder: React.FC<CodeForwarderProps> = ({ code }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [apiResponse, setApiResponse] = useState<string>("");
  const [requestSuccessful, setRequestSuccessful] = useState<boolean>(false);

  const requestRiddle = (code: string) => {
    fetch("./api/checkCode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
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

  useEffect(() => {
    requestRiddle(code);
  }, [code]);

  return (
    <StyledCard>
      <StyledCardContent>
        <h1 style={{ fontFamily: "Town31Dim" }}>readme Scavenger Hunt 2021</h1>
        <div style={{ margin: "5rem 0 auto 0" }}>
          {loading ? (
            <LinearProgress />
          ) : requestSuccessful ? (
            apiResponse
          ) : (
            code + " is not a valid code"
          )}
        </div>
      </StyledCardContent>
    </StyledCard>
  );
};

export default CodeForwarder;
