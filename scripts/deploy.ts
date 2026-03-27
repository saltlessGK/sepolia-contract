import { network } from "hardhat";
import { parseUnits } from "ethers";

// Connect to configured network and declared sender wallet (with private key in .env file)
const { ethers } = await network.connect();

async function main() {
  // Retrieve the contract factory (properties) for CustomToken and deploy it
  const Token = await ethers.getContractFactory("CustomToken");
  const deploy = await Token.deploy();
  await deploy.waitForDeployment();

  // Output the deployment transaction hash
  const deployTx = deploy.deploymentTransaction();
  if (deployTx) {
    console.log("Contract deployment hash:", deployTx.hash);
  }

  // Information on sended amounts, receiving address and metadata payload
  const recipient = "0xeE0633a08B3a0d4ff5170bAecab215359731524b";
  const amount = parseUnits("894", 18);
  const payload = "FINAL-4035894";

  // Convert payload string to hexadecimal format
  const hexPayload = ethers.hexlify(
    ethers.toUtf8Bytes(payload)
  );

  // Call mint() function from the deployed contract
  const tx = await deploy.mint(recipient, amount, hexPayload);
  console.log("Transaction hash:", tx.hash);
}

// Execute the main function with proper error handling
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});