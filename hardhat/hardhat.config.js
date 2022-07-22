require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_HTTPS_URL, METAMASK_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: ALCHEMY_HTTPS_URL,
      accounts: [`0x${METAMASK_PRIVATE_KEY}`],
    },
  },
};
