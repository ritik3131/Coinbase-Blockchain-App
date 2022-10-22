import { useState } from 'react'
import styled from 'styled-components'
import CoinItem from './CoinItem';

function CoinSelector({
    setAction,
    selectedToken,
    setSelectedToken,
    sanityToken,
    thirdWebToken,
    walletAddress,
  }) {
  return (
    <Wrapper>
    <Title>Select asset</Title>
    <CoinList>
      {sanityToken.map(token => (
        <CoinItem
          key={token.name}
          token={token}
          sender={walletAddress}
          selectedToken={selectedToken}
          setAction={setAction}
          setSelectedToken={setSelectedToken}
          sanityToken={sanityToken}
          thirdWebToken={thirdWebToken}
        />
      ))}
    </CoinList>
  </Wrapper>
  )
}

export default CoinSelector;

const Wrapper = styled.div``
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`