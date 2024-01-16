// import { useState } from "react";
import "./ConnectWallet.css"

const ConnectWallet = ({currentAccount, setCurrentAccount}) => {

    // const [currentAccount, setCurrentAccount] = useState(null);

    async function connect() {
        if (window.ethereum) {
          try {
              const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
              setCurrentAccount(accounts[0]);
            console.log('Connected', accounts[0]);
          } catch (error) {
            console.error('Error connecting to MetaMask', error);
          }
        } else {
          console.log('Please install MetaMask.');
        }
    }
    
    window.ethereum.on('accountsChanged', (accounts) => {
        // Handle the new accounts, or reload the page
        setCurrentAccount(accounts[0]);
      });
      
    return (
        <>
            {currentAccount === null ?
                <button onClick={connect} className="connectBtn">Connect Wallet</button> :
                <div className="accountAddress">{currentAccount.slice(0, 4) + '...' + currentAccount.slice(-4)}</div>}
        </>
    );
}
 
export default ConnectWallet;