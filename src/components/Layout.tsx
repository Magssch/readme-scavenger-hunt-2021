import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background-color: rgba(255, 255, 255, 0.8) !important;
  margin: auto;
  width: 95%;
  max-width: 700px;
  min-height: 70%;
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
  text-align: center;
  margin: 0;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Title>readme Scavenger Hunt 2021</Title>
        <br />
        <>{children}</>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Layout;
