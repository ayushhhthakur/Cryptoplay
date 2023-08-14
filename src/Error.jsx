import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  const handleGoBackClick = () => {
    // Scroll to the top of the page when the "Go Back" button is clicked
    window.scrollTo(0, 0);
  };

  return (
    <Wrapper>
      <img src="../images/error.svg" alt="error" />
      <NavLink to="/" onClick={handleGoBackClick}>
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error;
