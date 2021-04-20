import React, { useEffect } from "react";
import Layout from "../components/Layout";

const App = () => {
  useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
  }, []);
  return <Layout>Vennligst vent...</Layout>;
};

export default App;
