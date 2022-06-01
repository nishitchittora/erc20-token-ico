const NCToken = artifacts.require("NCToken");
const ICO = artifacts.require("ICO");

module.exports = function (deployer) {
  deployer.deploy(NCToken, 1000000).then(() => {
    return deployer.deploy(ICO, NCToken.address);
  });
};
