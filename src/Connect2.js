import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
// import Tilt from "react-tilt";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallet/connectors";
import { isMobile } from "react-device-detect";

const Connect2 = () => {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  const { first, setFirst } = useState(false);
  const { second, setSecond } = useState(false);
  const { third, setThird } = useState(false);
  // const showAccount = document.querySelector('.showAccount');
  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    //console.log(web3, "web 3 console")
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  async function connect() {
    try {
      if (!window?.web3?.currentProvider) {
        alert(`Metamask is not installed.
        Try Different browser or Install Metamask.`);
        return;
      }
      await activate(injected);

      //   if (id !== parseInt(chainId)) {
      //     alert("Please change your network to Mainnet");
      //     return false;
      //   }

      const accounts = await web3.eth.getAccounts();
      //   if (isMetamask) {
      //   }
      // setMessage("successful");

      return "success";
    } catch (err) {
      alert(JSON.stringify(err.message));
      return "failed";
    }
  }
  return (
    <div>
      {/* <Tilt
        className="Tilt"
        options={{
          max: 0,
          reverse: false, // reverse the tilt direction
          max: 15, // max tilt rotation (degrees)
          perspective: 3500, // Transform perspective, the lower the more extreme the tilt gets.
          scale: 1, // 2 = 200%, 1.5 = 150%, etc..
          speed: 300, // Speed of the enter/exit transition
          transition: true, // Set a transition on enter/exit.
          axis: null, // What axis should be disabled. Can be X or Y.
          reset: true, // If the tilt effect has to be reset on exit.
          easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        }}
      > */}
      <Container>
        <Card
          style={{
            border: "none",
            // backgroundImage: `url("${monkey}")`,
            backgroundColor: "unset",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            maxWidth: "1440px",
            borderRadius: "0.75rem",
          }}
          className="margin1"
        >
          <Card.Body>
            <div className="ivqYJF"></div>

            {!isMobile ? (
              window.ethereum ? (
                !active ? (
                  <button
                    variant=""
                    className="solbutton mx-auto enableEthereumButton"
                    onClick={connect}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <button variant="" className="solbutton mx-auto">
                    Mint
                  </button>
                )
              ) : (
                alert("Install metamask")
              )
            ) : window.ethereum ? (
              !active ? (
                <button
                  variant=""
                  className="solbutton mx-auto enableEthereumButton"
                  onClick={connect}
                >
                  Connect Wallet
                </button>
              ) : (
                <button variant="" className="solbutton mx-auto">
                  Mint
                </button>
              )
            ) : (
              <a className="solbutton" href="">
                <button
                  variant=""
                  className="solbutton mx-auto enableEthereumButton"
                  onClick={connect}
                >
                  Connect Wallet
                </button>
              </a>
            )}
          </Card.Body>
        </Card>
      </Container>
      {/* </Tilt> */}
    </div>
  );
};

export default Connect2;
