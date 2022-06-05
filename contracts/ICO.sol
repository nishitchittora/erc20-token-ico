//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import './NCToken.sol';

contract ICO {
  address admin;
  NCToken public nct;
  uint256 public tokenPrice;
  uint256 public tokensSold;
  event Seller(address _buyer, uint256 _noOfToken);

  constructor(NCToken _tokenContract, uint256 _price){
    admin = msg.sender;
    nct = _tokenContract;
    tokenPrice = _price;
  }

  function multiply(uint x, uint y) internal pure returns(uint z){
    return x * y;
  }

  function buyToken(uint256 _buyToken) public payable{
    require(msg.value == multiply(_buyToken, tokenPrice));
    tokensSold += _buyToken;
    emit Seller(msg.sender, _buyToken);
  }


  //end sale
}
