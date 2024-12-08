# The EventTicket42 NFT (ET42)

## Overview
**The EventTicket42 Token** project aims to revolutionize event ticketing by leveraging NFT technology. By tokenizing concert and party tickets as NFTs, we enhance security, transparency, and user experience, making event attendance and ticket management more efficient and engaging.

## Why the ERC-721 standard ?
The ERC-721 standard allows each token to be unique and non-fungible, making it ideal for ticketing systems where distinct attributes (e.g., VIP privileges) are essential. It enables transparent tracking of each ticket’s ownership history on the blockchain, reducing fraud and counterfeiting. Custom metadata can be included, such as event name, date, seat location, and even interactive or collectible elements (e.g., digital artwork linked to the event). This uniqueness allows tickets to become rare collectibles, especially for memorable events, adding extra value for holders.

Moreover, by integrating the **IERC2981 royalty standard**, event organizers can automatically receive royalties from secondary sales of tickets. This ensures that creators or organizers capture a percentage of resale profits whenever a ticket is traded on a secondary marketplace, providing a sustainable and fair revenue model. This functionality aligns with the growing demand for **programmable revenue streams** in the Web3 economy.

## Why NFT in comparison to traditional tickets ?
- **Security and authenticity**: Impossible to counterfeit due to blockchain technology, ensuring each ticket is authentic.
- **Transferability**: Easily transferable between users in a secure and verifiable manner through smart contracts.
- **Programmability and control**: Smart contracts can enforce specific conditions, such as resale restrictions or royalties for organizers on secondary sales.
- **Royalties and revenue sharing**: By using the **IERC2981 standard**, event organizers can claim a share of profits from secondary sales. Each resale of a ticket automatically triggers a royalty payment, creating a sustainable revenue stream and encouraging long-term support for the ecosystem.


## Project Directory Structure

### `code/`
Contains all the source code files for the smart contracts. The source code includes the contract `ET42.sol`, which defines the token's functionality and user interactions.

### `deployment/`
Contains files used to deploy the contract.

### `documentation/`
This section helps developers and users understand how the EventTicket42 Token works and how to interact with it.

**EventTicket42 (ET42) Contract :** https://sepolia.etherscan.io/address/0x58666114DeF0D5439417E06Fa62eec25703Eb64D
