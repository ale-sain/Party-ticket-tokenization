const express = require('express');
const { ethers, AlchemyProvider } = require('ethers');
require('dotenv').config();
const cors = require('cors'); 
const abi = require('./abis/abi.json'); // ABI du contrat
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

const provider = new AlchemyProvider('sepolia', process.env.ALCHEMY_KEY);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, wallet);

function encodeImageToBase64(imgPath) {
    const image = fs.readFileSync(imgPath);
    return image.toString('base64');
}

function extractMetadata(metadataPath) {
    const metadata = fs.readFileSync(metadataPath, 'utf8');
    return JSON.parse(metadata);
}

app.post('/mint', async (req, res) => {
    const { to, isVIP, imgPath, imgIPFS, metadataPath, metadataIPFS } = req.body;
    
    try {
        // const imageBase64 = encodeImageToBase64(imgPath)
        const metadata = extractMetadata(metadataPath[isVIP]);
        const tokenURI = metadataIPFS[isVIP];

        console.log(metadata)

        const tx = await contract.mint(to, tokenURI, JSON.stringify(metadata), imgIPFS, isVIP);
        const receipt = await tx.wait();
        const nextTokenId = await contract.nextTokenId();

        const { name, description } = metadata;
        const tokenId = nextTokenId - 1n;
        const transactionHash = receipt.hash;

        res.json({ 
            success: true, 
            receipt,
            name,
            description,
            tokenId: tokenId.toString(),
            transactionHash
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
