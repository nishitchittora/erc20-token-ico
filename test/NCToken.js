const NCToken = artifacts.require("NCToken");

contract("NCToken", (accounts) => {
  before(async () => {
    nctoken = await NCToken.deployed();
    console.log("Token address", nctoken.address);
  });
  it("Owner has 1M tokens", async () => {
    let balance = await nctoken.balanceOf(accounts[0]);
    console.log(web3.utils.fromWei(balance), " ether");
    assert.equal(
      web3.utils.fromWei(balance),
      1000000,
      "Balance should be 1M for owner"
    );
  });

  it("Can transfer b/w accounts", async () => {
    const amount = web3.utils.toWei("1000", "ether");
    await nctoken.transfer(accounts[1], amount);
    let balance = await nctoken.balanceOf(accounts[1]);

    assert.equal(web3.utils.fromWei(balance), 1000, "Balance should be 1000");
  });

  it("Check if owner has more token before transfer", async () => {
    let balance = await nctoken.balanceOf(accounts[1]);
    expect(parseInt(web3.utils.fromWei(balance, "ether"))).to.be.gt(100);
  });
});
