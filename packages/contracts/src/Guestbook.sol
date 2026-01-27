// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Guestbook {
    // Definimos o que é uma "Mensagem"
    struct Message {
        address sender;
        string text;
        uint256 timestamp;
    }

    // Criamos uma lista (array) para guardar todas as mensagens
    Message[] public messages;

    // Função para qualquer um escrever no livro
    function postMessage(string memory _text) public {
        messages.push(Message({
            sender: msg.sender,
            text: _text,
            timestamp: block.timestamp
        }));
    }

    // Função para ler todas as mensagens de uma vez
    function getAllMessages() public view returns (Message[] memory) {
        return messages;
    }
}