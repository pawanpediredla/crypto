pragma solidity ^0.8.0;
contract SimpleStoragesol{
    uinit256 public storedData;
    function set(uint256 x) public{
        storedData=x
    }
}