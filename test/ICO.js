const ICO = artifacts.require("ICO");

contract("ICO", (accounts) => {
  before(async () => {
    ico = await ICO.deployed();
    console.log("Sale address", ico.address);
  });

  // Check for if values are properly initialied

  // check for proper buy tokens

  it("facilitate token buying", async () => {
    let numberOfToken = 10;
    let tokenPrice = web3.utils.toWei(1);
    let buyer = accounts[1];
    const buyToken = ico.buyToken(numberOfToken, {
      from: buyer,
      value: numberOfToken * tokenPrice,
    });
    const buyReceipt = ethers.provider.getTransactionReceipt(buyToken.hash);
    console.log(buyReceipt);
    assert.equal(buyReceipt.logs.length, 1, "triggering the event");
    assert.equal(
      buyReceipt.logs[0].event,
      "Sell",
      "Should be the 'Sell' event"
    );
    assert.equal(buyReceipt.logs[0].args._buyer, buyer, "Owner check");
    assert.equal(
      buyReceipt.logs[0].args._amount,
      numberOfToken,
      "Amount check"
    );
    const tokenSold = await ico.tokenSold();
    console.log(tokenSold);
  });
});
