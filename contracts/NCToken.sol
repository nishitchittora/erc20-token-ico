//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";


contract NCToken is ERC20{
  constructor(uint256 initialSupply) ERC20("NCToken", "NCT"){
    _mint(msg.sender, initialSupply*(10 ** decimals()));
  }
}
