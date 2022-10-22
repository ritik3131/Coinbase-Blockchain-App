import React from "react";
import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promos from "./Promos";

function Main({ walletAddress, sanityToken, thirdWebToken }) {
  return (
    <Wrapper>
      <Portfolio
        walletAddress={walletAddress}
        sanityToken={sanityToken}
        thirdWebToken={thirdWebToken}
      />
      <Promos />
    </Wrapper>
  );
}

export default Main;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  & div {
    border-radius: 0.4rem;
  }
`;
