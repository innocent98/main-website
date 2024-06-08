import "../profile.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../../atomic/atoms/button/Button";
import Container from "../../../../atomic/atoms/container/Container";

const Footer = ({ handleNext, handlePrev, prevRoute, nextRoute, btnText }) => {
  return (
    <main>
      <Container variant="wrapper--flex--between" className="footer">
        <NavLink to={prevRoute}>
          <Button variant="border" onClick={handlePrev}>
            Back
          </Button>
        </NavLink>
        <NavLink to={nextRoute}>
          <Button variant="fitted" onClick={handleNext}>
            {btnText}
          </Button>
        </NavLink>
      </Container>
    </main>
  );
};

export default Footer;
