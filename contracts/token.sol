// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CustomToken is ERC20, Ownable {
    string[] public data;
    constructor() ERC20("CustomToken", "CSTK") Ownable(msg.sender) {}
    function mint(address to, uint256 amount, bytes memory hexData) public onlyOwner {
        _mint(to, amount);
        data.push(string(hexData));
    }
}