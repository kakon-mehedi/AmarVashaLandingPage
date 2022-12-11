import React from "react";
import About from "../components/About";
import Companies from "../components/Companies";
import Header from "../components/Header";
import { Container } from "../components/miniComp/Containers";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Companies />
        <About />
      </Container>
    </>
  );
}

export default Home;
