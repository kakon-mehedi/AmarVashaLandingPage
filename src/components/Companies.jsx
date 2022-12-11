import React from "react";
import styled from "styled-components";

const TrustedByContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 10rem;
`;

const Title = styled.p`
  color: rgba(69, 88, 128, 0.5);
  font-size: 14px;
`;

const CompanyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

function Companies() {
  return (
    <TrustedByContainer>
      <Title>Trusted by forward-thinking software teams around the world</Title>
      <CompanyList>
        <Image src="assets/img/logo-1.png"></Image>
        <Image src="assets/img/logo-2.png"></Image>
        <Image src="assets/img/logo-3.png"></Image>
        <Image src="assets/img/logo-4.png"></Image>
        <Image src="assets/img/logo-5.png"></Image>
        <Image src="assets/img/logo-6.png"></Image>
        <Image src="assets/img/logo-7.png"></Image>
      </CompanyList>
    </TrustedByContainer>
  );
}

export default Companies;
