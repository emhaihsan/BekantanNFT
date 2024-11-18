i

# **Bekantan NFT Project**

## **Overview**

This project is a simple implementation of a non-fungible token (NFT) on the Ethereum blockchain using Solidity. The project consists of a single contract, `BekantanNFT`, which inherits from the OpenZeppelin `ERC721` contract.

## **Contract Details**

- **Name:** BekantanNFT
- **Symbol:** BNFT
- **Contract Address:** [Insert contract address after deployment]

## **Functionality**

The `BekantanNFT` contract allows for the creation and management of unique digital assets on the Ethereum blockchain. The contract includes the following functions:

- **Constructor:** Initializes the contract with the name and symbol.
- **Mint:** Creates a new NFT with a unique token ID.

## **Deployment**

To deploy the contract, run the following command in the terminal:

```bash
npx hardhat run scripts/deploy.js
```

## **Requirements**

- Node.js (version 14 or higher)
- Hardhat (version 2.9.3 or higher)
- Solidity (version 0.8.10 or higher)
- Ethers.js (version 5.5.2 or higher)

## **Directory Structure**

- `contracts/`: Contains the Solidity contract files.
- `scripts/`: Contains the deployment script.

## **Acknowledgments**

This project was created using the OpenZeppelin `ERC721` contract and the Hardhat framework.
