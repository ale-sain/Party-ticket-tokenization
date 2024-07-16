import React, { useState } from 'react';
import './css/SelectedItem.css'

const backendURL = 'http://localhost:4000';

const SelectedItem = ({ item, onBackClick }) => {
    const [minting, setMinting] = useState(false);
    const [isVIP, setIsVIP] = useState(0);
    const [responseMessage, setResponseMessage] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [error, setError] = useState('');
    const [nftDetails, setNftDetails] = useState({});
    const [nftMinted, setNftMinted] = useState(false);
    
    async function mintNFT(item) {
        if (!walletAddress || walletAddress.length !== 42) {
            setError('You must enter a valid address');
            return;
        }

        if (!item.contract) {
            setError('This party has no NFT ticket available yet');
            return;
        }

        setNftMinted(false);
        setNftDetails({})
        setError('')
        setMinting(true);
        setResponseMessage(''); 
    
        const response = await fetch(`${backendURL}/mint`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: walletAddress,
                isVIP: isVIP,
                imgPath: item.imageSrc, 
                imgIPFS: item.imgIPFS, 
                metadataPath: item.metadataPath, 
                metadataIPFS: item.metadataIPFS
            })
        });

        const data = await response.json();
        setMinting(false);

        if (data.success) {
            console.log('NFT Minted!', data.receipt);
            setNftMinted(true);
            setResponseMessage((isVIP ? 'VIP' : 'REGULAR') + ' Ticket successfully minted!');
            setNftDetails({
                name: data.name,
                description: data.description,
                tokenId: data.tokenId,
                transactionHash: data.transactionHash
            });
        } else {
            console.error('Error:', data.error);
            setResponseMessage(`Error: ${data.error}`);
        }
      }

  return (
    <>
        <div className="selected-item">
            <div onClick={onBackClick} className="back-button">&larr;</div>
            <div className="left">
                <h2>{item.title}</h2>
                <p className="spaced">By <span className="whited">{item.organizer}</span></p>
                <div className="little-block">
                    <div className="dates-block spaced">
                        <p>From : <span className="whited"></span> <span className="event-date">{item.startdate}</span> at <span className="whited">{item.starttime}</span></p>
                        <p>To : <span className="whited"></span> <span className="event-date">{item.enddate}</span> at <span className="whited">{item.endtime}</span></p>
                    </div>
                    <div className="location spaced">Location : <span className="whited">{item.location}</span></div>
                </div>
                <div className="entries">
                    <input
                    type="text"
                    className="wallet-input"
                    placeholder="Enter your wallet address (0x...)"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    />
                    <div className="buttons">
                        <button className="ticket-button" onClick={() => { setIsVIP(0); mintNFT(item); }}><p className="inside-button">REGULAR TICKET</p></button>
                        <button className="ticket-button" onClick={() => { setIsVIP(1); mintNFT(item); }}><p className="inside-button">VIP TICKET</p></button>
                    </div>
                    <div className="message-container">
                        {error && <p className="error-message">{error}</p>}
                        {minting && <div className="loading-gif">Minting... <img src="https://media.tenor.com/TFgQFz50U1IAAAAi/pikachu-minecraft.gif" alt="Loading..." /></div>}
                        {responseMessage && !minting && (
                            <div>
                                <p className="response-message">{responseMessage}</p>
                                {nftMinted && (
                                <div>
                                    <p className="transaction-hash">Name: {nftDetails.name}</p>
                                    <p className="transaction-hash">Token ID: {nftDetails.tokenId}</p>
                                    <p className="transaction-hash">Description: {nftDetails.description}</p>
                                    <p className="transaction-hash">Transaction: <a href={`https://sepolia.etherscan.io/tx/${nftDetails.transactionHash}`} target="_blank" rel="noopener noreferrer">View on Etherscan</a></p>
                                </div>
                            )}
                            </div>
                         )}
                    </div>
                </div>
            </div>
            <div className="rightt">
                <img src={item.imageSrc} alt={item.title} />
            </div>
        </div>
    </>
  );
};

export default SelectedItem;
