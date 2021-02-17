const HYPEToken = artifacts.require("HYPEToken");

const migration = async (deployer, network, accounts) => {
  await Promise.all([
    deployToken(deployer, network),
  ]);
};

module.exports = migration;

async function deployToken(deployer, network) {
  await deployer.deploy(HYPEToken);
}
