import React from "react";
import styled from "styled-components";
import background from "../../images/LandingPage.jpeg"

const LandingPage = () => {
const LandingPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const LandingPageImage = styled.div`
  width: 100vw;
  height: 30vh;
  image-width: 10vw;
  background-image: url(${background});
  background-repeat: repeat-x;
`;
const MainDesc = styled.div`
  gap-to
  width: 70vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  background-color: green;
  border-radius: 15px;
  top-
`
const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`
const SocialMedia = styled.ul`
  height: 30vh;
  width: 20vw;
  background-color: yellow;
  border-radius: 15px;
  list-style-type: none;
`
  return (<>
    <LandingPageLayout>
      <LandingPageImage></LandingPageImage>
      <Wrapper>
        <MainDesc>
          <h1>Main Description</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </MainDesc>
        <SocialMedia>
          Follow us on
          <li>Instagram: </li>
          <li>Twitter: </li>
        </SocialMedia>
      </Wrapper>
    </LandingPageLayout>
  </>)
};

export default LandingPage;
