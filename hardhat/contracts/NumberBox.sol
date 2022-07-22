// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract NumberBox {
    uint256 number;

    constructor(uint256 _startNumber) {
        number = _startNumber;
    }

    function update(uint256 newNumber) public {
        number = newNumber;
    }

    function read() public view returns (uint256) {
        return number;
    }
}
