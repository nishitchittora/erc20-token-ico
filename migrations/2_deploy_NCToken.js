const NCToken = artifacts.require("NCToken");

module.exports = function (deployer) {
  deployer.deploy(NCToken, 1000000);
};
