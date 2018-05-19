pragma solidity ^0.4.17;
contract Hello {
    string private message;
    
    function Hello(string mes) public {
        message = mes;
    }
    
    function setMessage(string mes) public {
        message = mes;
    }
 
    function getMessage() public view returns(string) {
        return message;
    }
}