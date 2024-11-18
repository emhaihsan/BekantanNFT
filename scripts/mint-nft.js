require("dotenv").config(); // Load environment variables from .env file

const { createAlchemyWeb3 } = require("@alch/alchemy-web3"); // Import Alchemy Web3 library
const web3 = createAlchemyWeb3(process.env.ALCHEMY_URL); // Initialize web3 with Alchemy provider

const contract = require("../artifacts/contracts/BekantanNFT.sol/BekantanNFT.json"); // Load contract artifact
const contractAddress = process.env.CONTRACT_ADDRESS; // Get contract address from environment variables

const nftContract = new web3.eth.Contract(contract.abi, contractAddress); // Create contract instance

async function mintNFT(tokenURI) {
  // Get the latest nonce for the wallet address
  const nonce = await web3.eth.getTransactionCount(
    process.env.WALLET_PUBLIC_KEY,
    "latest"
  );

  // Define the transaction object
  const tx = {
    from: process.env.WALLET_ADDRESS, // Sender wallet address
    to: contractAddress, // Receiver contract address
    nonce: nonce, // Transaction nonce
    gas: 500000, // Gas limit
    maxPriorityFeePerGas: 1000000000, // Max priority fee per gas
    data: nftContract.methods
      .mintNFT(process.env.WALLET_PUBLIC_KEY, tokenURI)
      .encodeABI(), // Encoded contract method call
  };

  // Sign the transaction with the wallet's private key
  const signedTx = await web3.eth.accounts.signTransaction(
    tx,
    process.env.WALLET_PRIVATE_KEY
  );

  // Send the signed transaction and get the transaction hash
  const txHash = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  console.log("Transaction hash:", txHash); // Log the transaction hash
  return txHash; // Return the transaction hash
}

mintNFT("YOUR-METADATA-URI");
