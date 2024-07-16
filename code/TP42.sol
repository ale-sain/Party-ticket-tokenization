// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract TechnoParty42 is ERC721URIStorage, IERC2981, Ownable {
    uint256 public nextTokenId;
    address private _royaltiesRecipient;
    uint256 private _royaltiesPercentageReg;
    uint256 private _royaltiesPercentageVip;

    mapping(uint256 => bool) private _vipTickets;
    mapping(uint256 => string) private _tokenMetadatas;
    mapping(uint256 => string) private _tokenImages;

    constructor() ERC721("TechnoParty42", "TP42") Ownable(msg.sender) {}

    function mint(address to, string memory tokenURI, string memory metadata, string memory imageBase64, bool isVIP) public onlyOwner {
        uint256 tokenId = nextTokenId;
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        _vipTickets[tokenId] = isVIP;
        _tokenMetadatas[tokenId] = metadata;
        _tokenImages[tokenId] = imageBase64;
        nextTokenId++;
    }

    function isVipTicket(uint256 tokenId) public view returns (bool) {
        return _vipTickets[tokenId];
    }

    function setRoyalties(address recipient, uint256 percentageReg, uint256 percentageVip) public onlyOwner {
        require(percentageReg <= 10000, "Regular percentage too high");
        require(percentageVip <= 10000, "VIP percentage too high");
        _royaltiesRecipient = recipient;
        _royaltiesPercentageReg = percentageReg;
        _royaltiesPercentageVip = percentageVip;
    }

    function royaltyInfo(uint256 tokenId, uint256 salePrice) external view override returns (address, uint256) {
        uint256 royaltyPercentage = _vipTickets[tokenId] ? _royaltiesPercentageVip : _royaltiesPercentageReg;
        uint256 royalty = (salePrice * royaltyPercentage) / 10000;
        return (_royaltiesRecipient, royalty);
    }

     function getTokenMetadata(uint256 tokenId) public view returns (string memory) {
        require(tokenId < nextTokenId, "Metadata query for nonexistent token");
        return _tokenMetadatas[tokenId];
    }

    function getTokenImage(uint256 tokenId) public view returns (string memory) {
        require(tokenId < nextTokenId, "Image query for nonexistent token");
        return _tokenImages[tokenId];
    }
}