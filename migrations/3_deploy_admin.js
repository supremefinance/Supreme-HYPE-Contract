const HYPEAdmin = artifacts.require("HYPEAdmin");
const HYPEToken = artifacts.require("HYPEToken");

const migration = async (deployer, network, accounts) => {
  await Promise.all([
    deployToken(deployer, network),
  ]);
};

module.exports = migration;

async function deployToken(deployer, network) {
  await deployer.deploy(HYPEAdmin,
      HYPEToken.address,
    'devaddress',
    '50000000000000000000',
    '23502480',
    '23512480'
  );

}
