import React from "react";
import { Navbar, Container, NavDropdown, NavItem, Nav } from "react-bootstrap";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../src/wallet/connectors";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import one from "./Images/1.png";
import two from "./Images/2.png";
import three from "./Images/3.png";
import four from "./Images/4.png";
import meta from "./Images/metamask.png";
import con from "./Images/conn.png";
const Navbartop = () => {
  let web3 = new Web3(window?.web3?.currentProvider);
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    //console.log(web3, "web 3 console")
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.REACT_APP_PROVIDER_URL)
    );
  }
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();
  async function connect() {
    try {
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
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed-top
        className="navbarColor"
      >
        <Container>
          <Navbar.Brand href="#home">
            {/* <img src={logo} style={{ width: "12rem" }} /> */}
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}

          <Nav className="m-auto ">
            <Nav.Link href="#features" id="ma">
              {/* <img src={title} className="test" /> */}
            </Nav.Link>
          </Nav>
          <Nav>
            <div
              style={{
                paddingRight: "0.5rem",
                paddingLeft: "0.5rem",
                marginTop: "10px",
              }}
            >
              <div class="socialMedias bgnav">
                <a href="https://www.bscscan.com/" target="_blank">
                  <img
                    src={one}
                    style={{ width: "25px", marginLeft: "20px" }}
                  />
                </a>{" "}
                <a href="https://www.bscscan.com/" target="_blank">
                  <img
                    src={two}
                    style={{ width: "25px", marginLeft: "20px" }}
                  />
                </a>
                <a href="https://www.bscscan.com/" target="_blank">
                  <img
                    src={three}
                    style={{ width: "25px", marginLeft: "20px" }}
                  />
                </a>
                <a href="https://www.bscscan.com/" target="_blank">
                  <img
                    src={four}
                    style={{ width: "25px", marginLeft: "20px" }}
                  />
                </a>
              </div>
            </div>
            <Nav.Link>
              <button
                type="button"
                class="btn btn-primary topbutton mt-1 des"
                data-toggle="modal"
                data-target="#exampleModal1"
              >
                CONNECT WALLET
              </button>
              <button type="button" class="btn btn-primary topbutton mt-1 mob">
                CONNECT WALLET
              </button>
              <div
                class="modal fade hide"
                id="exampleModal1"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{ top: "200px" }}
              >
                <div class="modal-dialog" role="document">
                  <div
                    class="modal-content "
                    style={{ backgroundColor: "#F58824" }}
                  >
                    <div>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body mb-3">
                      {" "}
                      <img
                        src={meta}
                        onClick={connect}
                        style={{ width: "100%" }}
                      />
                      <hr />
                      <img src={con} style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbartop;
