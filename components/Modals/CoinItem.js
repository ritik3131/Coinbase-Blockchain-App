import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/sanity";
import { FaCheck } from "react-icons/fa";

function CoinItem({
  token,
  sender,
  setAction,
  selectedToken,
  setSelectedToken,
  sanityToken,
  thirdWebToken,
}) {
  const [imageUrl, setImageUrl] = useState("");
  const [balance, setBalance] = useState("Fetching");
  useEffect(() => {
    const url = ImageUrlBuilder(client).image(token.logo).url();
    setImageUrl(url);
  }, [token]);

  useEffect(() => {
    const getBalance = async () => {
      let activeThirdWebToken;

      thirdWebToken.map((twToken) => {
        if (twToken.address === token.contractaddress) {
          activeThirdWebToken = twToken;
        }
      });
      const balance = await activeThirdWebToken.balanceOf(sender);
      setBalance(balance.displayValue);
    };
    if (thirdWebToken) getBalance();
  }, [thirdWebToken]);
  return (
    <Wrapper
      style={{
        backgroundColor: selectedToken.name === token.name && "#141519",
      }}
      onClick={() => {
        setSelectedToken(token);
        setAction("send");
      }}
    >
      <Main>
        <Icon>
          <img src={imageUrl} alt="" />
        </Icon>
        <NameDetails>
          <Name>{token.name}</Name>
          <Symbol>{token.symbol}</Symbol>
        </NameDetails>
      </Main>
      <Balance>
        {balance} {token.symbol}
      </Balance>
      <IsSelected>
        {Boolean(selectedToken.contractaddress === token.contractaddress) && (
          <FaCheck />
        )}
      </IsSelected>
    </Wrapper>
  );
}

export default CoinItem;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.3rem;
  &:hover {
    background-color: #0e0f14;
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 1rem;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  & > img {
    /* margin: -0.5rem 1rem; */
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const NameDetails = styled.div``;

const Name = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
`;

const Symbol = styled.div`
  color: #888f9b;
  font-size: 0.8rem;
`;

const Balance = styled.div``;

const IsSelected = styled.div`
  margin-left: 0.5rem;
  color: #3773f5;
`;
