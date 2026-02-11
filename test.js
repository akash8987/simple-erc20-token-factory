const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleToken", function () {
  it("Should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();
    const token = await ethers.deployContract("SimpleToken", ["TestToken", "TST", 1000]);
    
    const ownerBalance = await token.balanceOf(owner.address);
    expect(await token.totalSupply()).to.equal(ownerBalance);
  });
});
