# The EventTicket42 NFT (ET42)

## Overview
**The EventTicket42 Token** project aims to revolutionize event ticketing by leveraging NFT technology. By tokenizing concert and party tickets as NFTs, we enhance security, transparency, and user experience, making event attendance and ticket management more efficient and engaging.

## Blockchain : Ethereum
Ethereum was chosen as the blockchain for this project due to its robustness, extensive ecosystem, and compatibility with smart contracts, especially ERC-721 contracts.

## Development environment and tools : Hardhat
For the development and deployment of smart contracts, the Hardhat development environment was used. Hardhat enables efficient and reliable creation, testing, and deployment of smart contracts. It also provides tools for integration with Ethereum and libraries like OpenZeppelin.

## Why the ERC-721 standard ?
Each token is unique and non-fungible, allowing for distinctive attributes (e.g., VIP privileges) which are essential for ticket management. It enable transparent tracking of each ticket’s ownership history on the blockchain, reducing fraud and counterfeiting. It can include custom metadata such as event name, date, seat location, and interactive or collectible elements (e.g., digital artwork linked to the event). Finally, tickets can become rare collectibles, especially for memorable events, adding extra value for holders.

## Why NFT in compare to traditional ticket ?
 - *Security and authenticity* : Impossible to counterfeit due to blockchain technology, ensuring each ticket is authentic.
 - *Transferability*: Easily transferable between users in a secure and verifiable manner through smart contracts.
 - *Programmability and controle*: Smart contracts can include specific conditions like resale restrictions or royalties for organizers on secondary sales.

## Project Directory Structure

### `code/`
Contains all the source code files for the smart contracts. The source code includes the contract `ET42.sol`, which defines the token's functionality and user interactions.

### `deployment/`
This section explains how to set up a full hardhat project, from basically writing the smart contract to its full deployment on the Ethereum blockchain. It contains files used to deploy the contract.

### `documentation/`
This section helps developers and users understand how the EventTicket42 Token works and how to interact with it.

**EventTicket42 (ET42) Contract :** https://sepolia.etherscan.io/address/0x58666114DeF0D5439417E06Fa62eec25703Eb64D