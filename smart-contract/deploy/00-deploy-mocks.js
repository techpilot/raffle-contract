const { network, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");

const BASE_FEE = ethers.utils.parseEther("0.25"); // 0.25 premium LINK price for request
const GAS_PRICE_LINK = 1e9; // link per gas calculated value based on the gas price of the chain

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const args = [BASE_FEE, GAS_PRICE_LINK];

  if (developmentChains.includes(network.name)) {
    log("Local network detected, deploying mocks...");
    // deploy mock VRFCoordinatorV2Mock...
    await deploy("VRFCoordinatorV2Mock", {
      from: deployer,
      args: args,
      logs: true,
    });
    log("Mocks Deployed!");
    log("---------------------------------------------");
  }
};

module.exports.tags = ["all", "mocks"];
