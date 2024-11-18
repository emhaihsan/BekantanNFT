const { ethers } = require("hardhat");
async function main() {
  const BekantanNFT = await ethers.getContractFactory("BekantanNFT");
  const bekantanNFT = await BekantanNFT.deploy();
  console.log("BekantanNFT deployed to:", bekantanNFT.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
