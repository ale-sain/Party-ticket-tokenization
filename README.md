# The EventTicket42 NFT 

## Overview
**EventTicket42 Token** turns event tickets into NFTs, providing secure, transparent, and efficient ticket access and management for concerts and parties.

## Why NFT in comparison to traditional tickets ?
- **Security and authenticity**: Impossible to counterfeit due to blockchain technology, ensuring each ticket is authentic.
- **Transferability**: Easily transferable between users in a secure and verifiable manner through smart contracts.
- **Programmability and control**: Smart contracts can enforce specific conditions, such as resale restrictions or royalties for organizers on secondary sales.
- **Royalties and revenue sharing**: By using the **IERC2981 standard**, event organizers can claim a share of profits from secondary sales. Each resale of a ticket automatically triggers a royalty payment, creating a sustainable revenue stream and encouraging long-term support for the ecosystem.


## Project Directory Structure

### `contract/`
Contains all the source code files for the smart contracts. The source code includes the contract `ET42.sol`, which defines the token's functionality and user interactions. It also contains a documentation to help developers and users understand how the EventTicket42 Token works and how to interact with it.

### `deployment/`
Contains files used to deploy the contract.

### `app/`
Hosts a local fullstack application where users can provide their wallet address to **access** pre-minted tickets, which are then transferred to their wallet. Transaction details can be tracked via **Sepolia Etherscan**.

**EventTicket42 (ET42) Contract :** https://sepolia.etherscan.io/address/0x58666114DeF0D5439417E06Fa62eec25703Eb64D
