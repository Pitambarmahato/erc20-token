const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Test PMToken', () => {
    it("should be equal to the initial supply", async ()=>{
        const PMToken = await ethers.getContractFactory("PMToken");
        const pmtoken = await PMToken.deploy(200000);
        await pmtoken.deployed();
        const [owner] = await ethers.getSigners();
        // const balance = 
        console.log(await pmtoken.balanceOf(owner.address))
        console.log(await pmtoken.decimals())
    })
})