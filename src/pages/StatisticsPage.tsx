import LinearProgress from "@material-ui/core/LinearProgress";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const StatisticsPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [apiResponse, setApiResponse] = useState<any>({});
  const [requestSuccessful, setRequestSuccessful] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("./api/getStatistics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
  }, []);

  return (
    <Layout>
      {loading ? (
        <LinearProgress />
      ) : (
        requestSuccessful &&
        apiResponse.map((code: any, key: React.Key) => {
          const date = new Date(0); // The 0 there is the key, which sets the date to the epoch
          date.setUTCSeconds(code.last_visit._seconds);
          return (
            <p key={key}>
              Kode: <b>{code.id}</b> | Antall ganger funnet: {code.visits}
              <br />
              Sist funnet: {date.toUTCString()}
            </p>
          );
        })
      )}
    </Layout>
  );
};

export default StatisticsPage;
