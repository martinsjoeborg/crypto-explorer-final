import "./Home.css"
// import video from "../../../assets/vids/";
import { Rain } from 'react-rainfall';

const Home = () => {
    return (
        
        <div className="home-container">

            {/* <video src={video} autoPlay loop muted></video> */}
            {/* <div style={{
                position: 'absolute',
                height: '600px',
                width: '1000px',
                color: "rgb(255, 115, 0)"
            }}> 
                <Rain />
            </div> */}

            <div className="home-intro-text">
                {/* <h1>Unlocking New Horizons - Your Portal to the Future of Finance</h1> */}
                <h1>Crypto Explorer - Your Guide Through the Web3 Ecosystem.</h1>
                <h3>Welcome to your new home for learning and testing some of the most popular use cases in crypto.
                    <br /><br />
                    On this site you will be able to simulate the most common use cases of DeFi, Dao's and NFT's as simple as possible.
                    <br /><br />
                    What you need to use this site:
                    <br /><br />
                    - A Metamask wallet
                    <br /><br />
                    - Connected to the Sepolia test network
                    <br /><br />
                    - Have SeploiaETH in your wallet
                    <br /><br />
                    - Imported the XPLRCOIN token

                    <br /><br />
                    If you lack one or all of these you can follow the guide below.
                </h3>
            </div>

            <div className="home-guide-text">
                <h2>Guide</h2>
                <div className="links">
                    <a href="https://metamask.io/download/" target="blank">Download Metamask to your browser</a>
                    <br /><br />
                    <a href="https://www.youtube.com/watch?v=4MO2jn22aa8" target="blank">Connect to the Sepolia test network</a>
                    <br /><br />
                    <a href="https://www.youtube.com/watch?v=YFCHF_A_lCI" target="blank">Get SepoliaETH to your wallet</a>
                    <br /><br />
                    <a href="https://support.metamask.io/hc/en-us/articles/360015489031-How-to-display-tokens-in-MetaMask" target="blank">Import a token to your Metamask wallet</a>
                </div>
                <p>Start exploring by connecting your wallet in the top right corner.</p>

            </div>

        </div>
    );
}
 
export default Home;