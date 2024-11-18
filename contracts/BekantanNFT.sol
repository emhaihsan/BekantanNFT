// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC721URIStorage, ERC721} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract BekantanNFT is ERC721URIStorage {
    uint256 private _nextTokenId;

    constructor() ERC721("BekantanNFT", "BNFT") {}

    function mintNFT(address recepient, string memory tokenURI) public {
        uint256 tokenId = _nextTokenId++;
        _mint(recepient, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}
