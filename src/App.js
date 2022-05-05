import logo from "./logo.svg";
import "./App.css";
import MintCard from "./MintCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbartop from "./Navbartop";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Footer from "./Footer";
function getLibrary(provider) {
  return new Web3(provider);
}
function App() {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="back">
          <Navbartop />
          <MintCard />
          <Footer />
        </div>
      </Web3ReactProvider>
    </>
  );
}

export default App;
