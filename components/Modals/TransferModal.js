import React, { useState } from "react";
import styled from "styled-components";
import CoinSelector from "./CoinSelector";
import Receive from "./Receive";
import LoadingSpinner from "../LoadingSpinner";
import Transfer from "./Transfer";
import { FaFlag } from "react-icons/fa";

function TransferModal({ sanityToken, walletAddress, thirdWebToken }) {
  const [action, setAction] = useState("send");
  const [selectedToken, setSelectedToken] = useState(sanityToken[0]);
  const selectedStyle = {
    color: "#3773f5",
  };

  const unselectedStyle = {
    border: "1px solid #282b2f",
  };

  const renderLogic = () => {
    if (action === "send")
      return (
        <Transfer
          selectedToken={selectedToken}
          setAction={setAction}
          walletAddress={walletAddress}
          thirdWebToken={thirdWebToken}
        />
      );
    else if (action === "receive")
      return (
        <Receive
          selectedToken={selectedToken}
          setAction={setAction}
          walletAddress={walletAddress}
        />
      );
    else if (action === "select")
      return (
        <CoinSelector
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
          sanityToken={sanityToken}
          setAction={setAction}
          walletAddress={walletAddress}
          thirdWebToken={thirdWebToken}
        />
      );
    else if (action === "transferred")
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            fontWeight: "600",
            color: "#27ad75",
          }}
        >
          Transfer completed
        </div>
      );
    else if (action === "transferring")
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          Transferring in progress...
          <LoadingSpinner />
        </div>
      );
      else if(action === 'error')
      return  <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
        color:"crimson"
      }}
    >
      Enter the information correctly!!
      <FaFlag/>
    </div>
  };

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === "send" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("send")}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === "receive" ? selectedStyle : unselectedStyle}
          onClick={() => setAction("receive")}
        >
          {" "}
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{renderLogic()}</ModalMain>
    </Wrapper>
  );
}

export default TransferModal;
const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`;
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`;

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`;

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`;
