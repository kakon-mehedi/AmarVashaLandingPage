import styled from "styled-components";
import { Container } from "./miniComp/Containers";
import Navbar from "./Navbar";

const HeaderContainer = styled.div`
  height: 880px;
  background: linear-gradient(
    180deg,
    rgba(242, 249, 255, 0.12) 0%,
    #f2f9ff 100%
  );
`;

const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  gap: 30px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #1e266d; ;
`;
const SubTitle = styled.p`
  font-size: 1rem;
  color: #455880;
`;
const HeaderButtons = styled.div`
  gap: 20px;
`;
const Button = styled.button`
  padding: 15px 30px;
  border: 0;
  margin-right: 20px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  border-radius: 100px;
  color: ${(props) => props.bgColor !== "#FFFFFF" && "#FFFFFF"};
  box-shadow: ${(props) =>
    props.bgColor === "#FFFFFF" && "0px 2px 4px rgba(0, 0, 0, 0.05)"};
`;

const HeroImg = styled.div`
  height: 585px;
  width: 977px;
  margin: 0 auto;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Navbar />
        <HeaderInfo>
          <Title>
            Good design meets <br /> great user experience
          </Title>
          <SubTitle>For everyone, from beginners to experts</SubTitle>
          <HeaderButtons>
            <Button bgColor={"#3751FF"}>Buy Digits</Button>
            <Button bgColor={"#FFFFFF"}>See the Featuers</Button>
          </HeaderButtons>
        </HeaderInfo>

        <HeroImg>
          <Image src="/assets/img/HeroImg.png"></Image>
        </HeroImg>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
