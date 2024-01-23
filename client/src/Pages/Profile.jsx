import React, { useState } from 'react';

function App() {
  let [account, setAccount] = useState("0");
  let [contractData, setContractData] = useState("0");

  const { ethereum } = window;

  const connectMetamask = async () => {
    if (window.ethereum !== "undefined") {
      try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    }
  }

  const connectContract = async () => {
    try {
      // Implement your contract connection logic here
      // Example: const contract = new ethers.Contract(contractAddress, abi, signer);
      // Replace contractAddress and abi with your actual values
    } catch (error) {
      console.error("Error connecting to contract:", error);
    }
  }

  const getData = async () => {
    try {} 
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const changeData = async () => {
    try {}
   catch (error) {
      console.error("Error changing data:", error);
    }
  }

  return (
    <div className="app">
      <button onClick={connectMetamask}>Connect To MetaMask</button>
      <p>{account}</p>

      <button onClick={connectContract}>Connect The Contract</button>
      <button onClick={getData}>Read From Contract</button>
      <button onClick={changeData}>Change Data</button>

      <p>{contractData}</p>
    </div>
  );
}

export default App;