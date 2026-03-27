# Sepolia Testnet Token Minting Project

In this project, the ERC-20 Smart Contract is written in Solidity and the script in TypeScript, along with Hardhat framework and Ethers.js toolkit.
## Dependencies

This project works on Node.js 24.14.0 (LTS) and Hardhat v3.

To deploy this codebase, first initialize Node.js and Hardhat for the project using `npm init -y` and `npx hardhat --init `

Hardhat initialization provides several configuration options, therefore, ensure that Hardhat v3 is installed and do not opt for any templates.

Install the following dependencies:
- Ethers.js toolkit: `npm install --save-dev @nomicfoundation/hardhat-toolbox-mocha-ethers`
- Smart Contracts library: `npm install @openzeppelin/contracts`
- ENV module: `npm install dotenv`
## Variable Components

Three variables can be customized to fit with each person's purpose:
- Receiving address: `const recipient = "0xeE0633a08B3a0d4ff5170bAecab215359731524b";`
- Minted amount: `const amount = parseUnits("894", 18);` -> sends 894 tokens of your choice
- Custom payload: `const payload = "FINAL-4035894";`

These are only examples for my assignment, and anyone can replace them with suitable information of your own.

## Deployment

Create a _.env_ file and insert the sender's wallet key: `WALLET_PRIVATE_KEY=[insert your own key]`

Compile your smart contract: `npx hardhat build`

Deploy the contract on the Sepolia testnet: `npx hardhat run scripts/deploy.ts --network sepolia`