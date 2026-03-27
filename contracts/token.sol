// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // OpenZeppelin module for ERC20 functionalities
import "@openzeppelin/contracts/access/Ownable.sol"; // OpenZeppelin module for ownership control

contract CustomToken is ERC20, Ownable {
    string[] public data; // Public array to store text metadata

    // Constructor to set token identity and address of contract owner
    constructor() ERC20("CustomToken", "CSTK") Ownable(msg.sender) {}

    // Function to mint new tokens to a certain address and append hexadecimal metadata to transaction data input
    function mint(address to, uint256 amount, bytes memory hexData) public onlyOwner {
        _mint(to, amount);
        data.push(string(hexData));
    }
}