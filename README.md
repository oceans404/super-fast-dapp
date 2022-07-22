# Build your first Fullstack Dapp

Welcome to the wonderful world of fullstack dapp development! Build and deploy your first dapp #onPolygon in under an hour while learning about developing with Hardhat, Solidity, and Alchemy.

#### Assumptions

- You have [nvm](https://github.com/nvm-sh/nvm) installed (I use version 18)
- You have [vscode](https://code.visualstudio.com/) installed and can open it from the command line: [`code .` tutorial](https://stackoverflow.com/questions/29971053/how-to-open-visual-studio-code-from-the-command-line-on-osx)

### Create the fullstack dapp repo
- `mkdir fast-dapp`
- `cd fast-dapp`


### Hardhat developer environment setup

[Hardhat](https://hardhat.org/) is a development environment that facilitates building on Ethereum.

- `mkdir hardhat`
- `cd hardhat`
- `npm install --save-dev hardhat`
- `npx hardhat`
- Select "Create a JavaScript project" and all other default options.
- `code .` to explore the hardhat folder


### Write your first smart contract

- `cd contracts`
- `touch NumberBox.sol` to create a new Solidity file where the smart contract code will live
- Write the NumberBox.sol smart contract
  - declare one state variable named "number" with type "uint256"
  - you should be able to specify a "startNumber" within the constructor
  - add an "update" function to change the value of "number"
  - add a "read" function to return the value of "number"
  - ex: NumberBox.sol: https://snipit.io/public/lists/21164/68899
- `cd ..` back into the hardhat directory
- `npx hardhat compile` to compile your new NumberBox.sol smart contract 
- https://docs.polygon.technology/docs/develop/alchemy


### Create an Alchemy project

- [Alchemy](https://docs.polygon.technology/docs/develop/alchemy) is a blockchain developer platform and API that allows us to communicate with the Polygon chain without having to run our own nodes. 

- go to the [Alchemy dashboard](https://dashboard.alchemyapi.io/) and click "Create app"
  - Name: NumberBox
  - Chain: Polygon
  - Network: Polygon Mumbai
- Click "View key" to see the resulting HTTPS link for your project. 
- `npm install dotenv --save` to install dotenv
- `touch .env` and create 2 variables within .env
  - ALCHEMY_HTTPS_URL = "https://polygon-mumbai.g.alchemy.com/v2/your-alchemy-api-key"
  - METAMASK_PRIVATE_KEY = "your-metamask-private-key". See https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key ONLY EXPORT TEST ACCOUNT PRIVATE KEYS!!!!!

### Deploy your smart contract to Polygon Mumbai

- `npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"` to install ethers
- Update your hardhat.config.js based on .env variables
  - change default network to polygon_mumbai
  - add the url and private key referencing .env variables
  - see https://snipit.io/public/lists/21164/68901
- Write deploy script in scripts/deploy.js
  - require hardhat
  - create a main function 
  - create a myFavoriteNumber const and assign it to your favorite number
  - create a NumberBox const and assign it to a factory for instances of your NumberBox contract
  - create a numBox const that awaits for NumberBox deployment
  - include console.log("Contract deployed to address:", numBox.address);
  - see https://snipit.io/public/lists/21164/68904
- `npx hardhat run scripts/deploy.js --network polygon_mumbai` LFG!!!! You just deployed your first smart contract to Polygon Mumbai!
- read the contract deployment console log to know where the contract is deployed. Search for this on https://mumbai.polygonscan.com/


### Bootstrap the frontend

[React](https://reactjs.org/) is a JavaScript library for building user interfaces.

- `cd ..` out of hardhat and into your fullstack directory
- `npx create-react-app frontend`
- `cd frontend`
- `cd src`
- `mkdir contracts`
- `cd contracts`
- `touch NumberBox.json`
  - Copy paste the NumberBox.json from hardhat/artifacts/contracts/NumberBox.json into this file
- `npm start`
- Add code to create Number Box form and submit button (classic frontend) see https://snipit.io/public/lists/21164/68910


### Connect wallet button with RainbowKit

Rainbowkit is a React library that makes it easy to add wallet connection to your dapp. It's intuitive, responsive and customizable.

- `npm install @rainbow-me/rainbowkit wagmi ethers`
- follow https://www.rainbowkit.com/docs/installation to set up wallet connection
- make sure to add chain.polygonMumbai when configuring chains!

### Read number

- `import { ethers } from "ethers";`
- https://snipit.io/public/lists/21164/68915

### Update number
- https://snipit.io/public/lists/21164/68914

### WAGMI!
- See full App.js: https://snipit.io/public/lists/21164/68912