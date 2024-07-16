# Usage of EventTicket42 Smart Contract

## Introduction

This guide explains how to deploy and use the EventTicket42 smart contract. This contract allows the creation and management of ERC721 tokens with metadata, images, VIP status, and royalty payments.

## EventTicket42 Contract

### Description

The EventTicket42 contract is an ERC721 token that represents event tickets for a party. These tokens can be minted with specific metadata and images, and can have a VIP status. Additionally, the contract supports royalty payments, ensuring that the original creator receives a percentage of secondary sales.

### ERC721 Functionalities

Since EventTicket42 is based on the ERC721 standard, it inherits all the basic ERC721 functionalities, including:
- `transfer`: Transfer tokens to another address.
- `approve`: Approve another address to transfer tokens on your behalf.
- `transferFrom`: Transfer tokens from one address to another using an allowance mechanism.
- `balanceOf`: Check the token balance of an address.
- `ownerOf`: Get the owner of a specific token.

### Initialization

Initialize the contract with maximum supply of tokens.

    // Deploy the contract
    maxSupply = 3000;
    EventTicket42 token = new EventTicket42(maxSupply);

### Main Functions
   - `mint`: 
     - **Parameters:** 
      - `to`: The address to receive the minted token.
      - `tokenURI`: URI for the token metadata.
      - `metadata`: Metadata in string format to be stored in the contract.
      - `imageBase64`: Base64 encoded image to be stored in the contract.
      - `isVIP`:  Boolean indicating if the token is a VIP ticket.
     - **Return Values:** None
     - **Usage:** Mint a new token with specified metadata and image, and assign VIP status if applicable (owner only).
  
   - `isVipTicket` : 
     - **Parameters:** `tokenId`: Token ID to query.
     - **Return Values:** True if the token is a VIP ticket, false otherwise.
     - **Usage:** Check if a token is a VIP ticket.

   - `setRoyalties`: 
     - **Parameters:** 
      - `recipient`: Address to receive the royalties.
      - `percentageReg`: Percentage of royalties for regular tickets (in basis points).
      - `percentageVip`: Percentage of royalties for VIP tickets (in basis points).
     - **Return Values:** None
     - **Usage:** Set the royalties recipient and percentages for regular and VIP tickets (owner only).

   - `royaltyInfo`: 
     - **Parameters:** 
      - `tokenId`: Token ID to query.
      - `salePrice`: Sale price of the token.
     - **Return Values:** 
      - Address to receive the royalties.
      - Amount of royalties to be paid.
     - **Usage:** Get the royalty information for a given token ID and sale price.

   - `getTokenMetadata` :
     - **Parameters:** `tokenId`: Token ID to query.
     - **Return Values:** Metadata of the token.
     - **Usage:** Get the metadata for a given token ID.
   
   - `getTokenImage` :
     - **Parameters:** `tokenId`: Token ID to query.
     - **Return Values:** IPFS URL image of the token.
     - **Usage:** Get the image for a given token ID.
    
  - `totalSupply`: 
     - **Parameters:** None.
     - **Return Values:** The total number of tokens minted.
     - **Usage:** Get the total number of tokens minted.


### Example Usage

   // Mint a new token
   token.mint(0xRecipientAddress, "tokenURI", "metadata", "imageData", true);

   // Check if a token is VIP
   bool isVIP = token.isVipTicket(tokenId);

   // Set royalties
   token.setRoyalties(0xRecipientAddress, 500, 1000); // 5% for regular, 10% for VIP

   // Get royalty info
   (address recipient, uint256 amount) = token.royaltyInfo(tokenId, salePrice);

   // Get token metadata
   string memory metadata = token.getTokenMetadata(tokenId);

   // Get token image
   string memory image = token.getTokenImage(tokenId);

   // Get total supply
   uint256 total = token.totalSupply();

### Notes

Always verify the recipient address before minting tokens.
Set the correct royalty percentages to ensure fair compensation for secondary sales.
