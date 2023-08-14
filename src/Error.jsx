import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink, useHistory } from "react-router-dom";

const Error = () => {
  const history = useHistory();

  useEffect(() => {
    const handlePopstate = () => {
      scrollToTop();
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const handleGoBack = () => {
    history.goBack();
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Wrapper>
      <img src="../images/error.svg" alt="error" />
      <NavLink to="/">
        <Button className="btn" onClick={handleGoBack}>
          Go Back
        </Button>
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
