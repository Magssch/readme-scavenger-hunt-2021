import React, { useEffect, useState } from "react";

interface CodeForwarderProps {
  code: string;
}

const CodeForwarder: React.FC<CodeForwarderProps> = ({ code }) => {
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
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    requestRiddle(code);
  }, [code]);

  return (
    <div>{requestSuccessful ? apiResponse : code + " is not a valid code"}</div>
  );
};

export default CodeForwarder;
