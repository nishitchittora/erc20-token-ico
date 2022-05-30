const ICO = artifacts.require("ICO");

contract("ICO", (accounts) => {
  before(async () => {
    nctoken = await ICO.deployed();
    console.log("Sale address", nctoken.address);
  });
});
