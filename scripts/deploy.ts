import { network } from "hardhat";
import { parseUnits } from "ethers";

const { ethers } = await network.connect();

async function main() {

  const Token = await ethers.getContractFactory("CustomToken");
  const deploy = await Token.deploy();
  await deploy.waitForDeployment();
  
  const deployTx = deploy.deploymentTransaction();
  if (deployTx) {
    console.log("Contract deployment hash:", deployTx.hash);
  }

  const recipient = "0xeE0633a08B3a0d4ff5170bAecab215359731524b";
  const amount = parseUnits("894", 18);
  const payload = "FINAL-4035894";
  const hexPayload = ethers.hexlify(
    ethers.toUtf8Bytes(payload)
  );

  const tx = await deploy.mint(recipient, amount, hexPayload);
  console.log("Transaction hash:", tx.hash);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});