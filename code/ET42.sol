// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

/**
 * @title EventTicket42
 * @dev ERC721 Token Contract with support for metadata storage, VIP tickets, and royalties.
 */
contract EventTicket42 is ERC721URIStorage, IERC2981, Ownable {
    uint256 public nextTokenId;
    uint256 public maxSupply;
    address private _royaltiesRecipient;
    uint256 private _royaltiesPercentageReg;
    uint256 private _royaltiesPercentageVip;

    mapping(uint256 => bool) private _vipTickets;
    mapping(uint256 => string) private _tokenMetadatas;
    mapping(uint256 => string) private _tokenImages;

    /**
     * @dev Initializes the contract by setting a name and a symbol for the token collection.
     * @param _maxSupply Maximum number of tokens that can be minted.
     */
    constructor(uint256 _maxSupply) ERC721("EventTicket42", "ET42") Ownable(msg.sender) {
        maxSupply = _maxSupply;
    }

    /**
     * @dev Returns the address of the royalties recipient.
     * @return address Address of the royalties recipient.
     */
    function totalSupply() public view returns (uint256) {
        return nextTokenId;
    }

    /**
     * @dev Returns if a token is a VIP ticket.
     * @param tokenId Token ID to query.
     * @return bool True if the token is a VIP ticket, false otherwise.
     */
    function isVipTicket(uint256 tokenId) public view returns (bool) {
        return _vipTickets[tokenId];
    }

    /**
     * @dev Mints a new token.
     * @param to Address to receive the minted token.
     * @param tokenURI URI for the token metadata.
     * @param metadata Metadata string to store it directly onchain.
     * @param imageData Image string to store it directly onchain.
     * @param isVIP Boolean indicating if the token is a VIP ticket.
     */
    function mint(address to, string memory tokenURI, string memory metadata, string memory imageData, bool isVIP) public onlyOwner {
        require(nextTokenId < maxSupply, "Max supply reached");
        uint256 tokenId = nextTokenId;
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        _vipTickets[tokenId] = isVIP;
        _tokenMetadatas[tokenId] = metadata;
        _tokenImages[tokenId] = imageData;
        nextTokenId++;
    }

    /**
     * @dev Sets the royalties recipient and percentages for regular and VIP tickets.
     * @param recipient Address to receive the royalties.
     * @param percentageReg Percentage of royalties for regular tickets (in basis points).
     * @param percentageVip Percentage of royalties for VIP tickets (in basis points).
     */
    function setRoyalties(address recipient, uint256 percentageReg, uint256 percentageVip) public onlyOwner {
        require(percentageReg <= 10000, "Regular percentage too high");
        require(percentageVip <= 10000, "VIP percentage too high");
        _royaltiesRecipient = recipient;
        _royaltiesPercentageReg = percentageReg;
        _royaltiesPercentageVip = percentageVip;
    }

    /**
     * @dev Returns the royalty information for a given token ID and sale price.
     * @param tokenId Token ID to query.
     * @param salePrice Sale price of the token.
     * @return address Address to receive the royalties.
     * @return uint256 Amount of royalties to be paid.
     */
    function royaltyInfo(uint256 tokenId, uint256 salePrice) external view override returns (address, uint256) {
        uint256 royaltyPercentage = _vipTickets[tokenId] ? _royaltiesPercentageVip : _royaltiesPercentageReg;
        uint256 royalty = (salePrice * royaltyPercentage) / 10000;
        return (_royaltiesRecipient, royalty);
    }

    /**
     * @dev Returns the metadata for a given token ID.
     * @param tokenId Token ID to query.
     * @return string Metadata of the token.
     */
    function getTokenMetadata(uint256 tokenId) public view returns (string memory) {
        require(tokenId < nextTokenId, "Metadata query for nonexistent token");
        return _tokenMetadatas[tokenId];
    }

    /**
     * @dev Returns the image for a given token ID.
     * @param tokenId Token ID to query.
     * @return string Base64 encoded image of the token.
     */
    function getTokenImage(uint256 tokenId) public view returns (string memory) {
        require(tokenId < nextTokenId, "Image query for nonexistent token");
        return _tokenImages[tokenId];
    }
}