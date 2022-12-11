import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div``;
const AboutInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.h1`
  color: #1e266d;
  text-align: center;
  margin-top: 190px;
  margin-left: 20px;
  font-size: 2.65rem;
`;
const Left = styled.div`
  margin-top: -110px;
  width: 45%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightInfo = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(69, 88, 128, 0.2);
  padding: 40px 10px;
  overflow: hidden;
  &:last-child {
    border: 0;
  }
`;

const Icon = styled.img`
  width: 52px;
  height: 52px;
`;
const InfoText = styled.div`
  width: 250px;
  margin-left: 40px;
  line-height: 1.5;
`;
const InfoTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1e266d;
`;
const InfoDetails = styled.div`
  margin-top: 25px;
  color: #455880;
  font-size: 16px;
`;

function About() {
  return (
    <AboutContainer>
      <Title>
        Whatever work you do, <br /> we're able to help
      </Title>

      <AboutInfoContainer>
        <Left>
          <Image src="assets/img/aboutImg.png"></Image>
        </Left>
        <Right>
          <RightInfo>
            <Icon src="assets/img/icon-2.png"></Icon>
            <InfoText>
              <InfoTitle>Design and Assets</InfoTitle>
              <InfoDetails>
                Make your brand stand out with pixel-perfect design crafted to
                perfection.
              </InfoDetails>
            </InfoText>
          </RightInfo>

          <RightInfo>
            <Icon src="assets/img/icon-1.png"></Icon>
            <InfoText>
              <InfoTitle>Easy Content</InfoTitle>
              <InfoDetails>
                Import your demos or build pages visually. Bonus: All images and
                illustrations included!
              </InfoDetails>
            </InfoText>
          </RightInfo>

          <RightInfo>
            <Icon src="assets/img/icon.png"></Icon>
            <InfoText>
              <InfoTitle>Fast and Reliable</InfoTitle>
              <InfoDetails>
                No heavy-weight plugins. No builders. No unneccesary file
                loading. Pure WordPress.
              </InfoDetails>
            </InfoText>
          </RightInfo>
        </Right>
      </AboutInfoContainer>
    </AboutContainer>
  );
}

export default About;
