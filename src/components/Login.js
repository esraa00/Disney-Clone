import styled from "styled-components";
import loginBackground from "../images/login-background.jpg";
import firstLogo from "../images/cta-logo-one.svg";
import secondLogo from "../images/cta-logo-two.png";

const Login = () => {
  return (
    <Container>
      <Content>
        <Logo src={firstLogo}></Logo>
        <SignUpButton>GET ALL THERE</SignUpButton>
        <Offer>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney subscription. As of 03/26/21. the price of Disney and
          The Disney Bundle will increase by $1
        </Offer>
        <Logo src={secondLogo}></Logo>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${loginBackground});
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
`;

const Logo = styled.img`
  max-width: 80%;
  margin-bottom: 10px;
`;

const SignUpButton = styled.button`
  background-color: #0063e5;
  color: var(--main-text-color);
  font-weight: bold;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
  width: 80%;
  cursor: pointer;

  @media (min-width: 1200px) {
    height: 90px;
    font-size: 28px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    height: 80px;
    font-size: 22px;
  }
  @media (max-width: 768px) and (min-width: 500px) {
    height: 60px;
    font-size: 18px;
  }
  @media (max-width: 500px) {
    height: 50px;
    font-size: 15px;
  }
  &:hover {
    background-color: #0483ee;
  }
`;

const Offer = styled.p`
  text-align: center;
  line-height: 1.5;
  letter-spacing: 1.5px;

  @media (min-width: 1200px) {
    width: 900px;
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 600px;
  }
  @media (max-width: 768px) and (min-width: 500px) {
    width: 400px;
  }
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export default Login;
