// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Web3HubCore {
    string public message;
    address public owner;

    event MessageUpdated(string newMessage, address updatedBy);
    event FundsWithdrawn(address owner, uint256 amount);

    // Otimização sugerida pelo Foundry: Wrap modifier logic
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    function _checkOwner() internal view {
        require(msg.sender == owner, "Web3Hub: Somente o dono pode executar");
    }

    constructor(string memory _initMsg) {
        message = _initMsg;
        owner = msg.sender;
    }

    function setMessage(string memory _newMessage) public {
        message = _newMessage;
        emit MessageUpdated(_newMessage, msg.sender);
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "Web3Hub: Nao ha fundos para sacar");

        (bool success, ) = payable(owner).call{value: balance}("");
        require(success, "Web3Hub: Falha ao enviar Ether");

        emit FundsWithdrawn(owner, balance);
    }

    receive() external payable {}
}