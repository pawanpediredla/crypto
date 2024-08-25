pragma solidity ^0.8.0;
contract SimpleStoragesol{
    uint256 public storedData;
    function set(uint256 x) public{
        storedData=x;
    }
}