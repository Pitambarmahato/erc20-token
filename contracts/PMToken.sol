// SPDX-License-Identifier:MIT

pragma solidity ^0.8.4;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PMToken is ERC20{
    constructor(uint256 initialSupply) ERC20("Pitambar", "PM"){
        console.log(msg.sender);
        _mint(msg.sender, initialSupply);
    }

}