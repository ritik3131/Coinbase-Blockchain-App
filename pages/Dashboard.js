import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { ethers } from "ethers";
import { ThirdwebSDK } from "@3rdweb/sdk";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      "https://goerli.infura.io/v3/deedc681ee0e43ea8dd9ed2e73f3146c"
    )
  )
);

function Dashboard({ address }) {
  const [sanityToken, setSanityToken] = useState([]);
  const [thirdWebToken, setThirdWebToken] = useState([]);
  useEffect(() => {
    const getTokens = async () => {
      try {
        const coins = await axios.get(
          "https://hbc4m569.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'coin'%5D%7B%20%0A%20%20name%2C%0A%20%20usdprice%2C%0A%20%20contractaddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
        );
        setSanityToken(coins.data.result);

        setThirdWebToken(
          coins.data.result.map((token) =>
            sdk.getTokenModule(token.contractaddress)
          )
        );
      } catch (err) {
        console.log(err);
      }
    };
    getTokens();
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityToken={sanityToken}
          thirdWebToken={thirdWebToken}
        />
        <Main
          walletAddress={address}
          sanityToken={sanityToken}
          thirdWebToken={thirdWebToken}
        />
      </MainContainer>
    </Wrapper>
  );
}

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;
