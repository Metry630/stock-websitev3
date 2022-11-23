import React from "react";
import styled from "styled-components";
import background from "../../images/LandingPage.jpeg"

const LandingPage = () => {
const LandingPageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
const LandingPageImage = styled.div`
  width: 100vw;
  height: 30vh;
  image-width: 10vw;
  background-image: url(${background});
  background-repeat: repeat-x;
`;
const MainDesc = styled.div`
  width: 70vw;
  height: 30vh;
`
  return (<>
    <LandingPageLayout>
        <LandingPageImage></LandingPageImage>
        <MainDesc>testing</MainDesc>
    </LandingPageLayout>
  </>)
};

export default LandingPage;
