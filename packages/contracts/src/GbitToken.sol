// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GbitToken is ERC20 {
    address public owner;
    uint256 public rate = 23456; // Preço variável para o Trade

    event PriceUpdated(uint256 newRate);
    event TokensPurchased(address buyer, uint256 ethAmount, uint256 gbitAmount);
    event TokensSold(address seller, uint256 gbitAmount, uint256 ethAmount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Apenas o dono!");
        _;
    }

    constructor() ERC20("Gbit Token", "GBIT") {
        owner = msg.sender;
        _mint(msg.sender, 1000000 * 10**decimals()); // Reserva inicial para liquidez
    }

    // Função para o CLI mudar o preço e fazer o gráfico subir/descer
    function setRate(uint256 _newRate) public onlyOwner {
        rate = _newRate;
        emit PriceUpdated(_newRate);
    }

    receive() external payable {
        deposit();
    }

    function deposit() public payable {
        require(msg.value > 0, "Envie ETH");
        uint256 amountToMint = msg.value * rate;
        _mint(msg.sender, amountToMint);
        emit TokensPurchased(msg.sender, msg.value, amountToMint);
    }

    function withdraw(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Saldo de GBIT insuficiente");

        // Cálculo exato: (Quantidade / Rate)
        uint256 ethAmount = amount / rate;
        
        require(address(this).balance >= ethAmount, "Contrato sem liquidez de ETH");

        _burn(msg.sender, amount);
        (bool success, ) = payable(msg.sender).call{value: ethAmount}("");
        require(success, "Transferencia de ETH falhou");
        
        emit TokensSold(msg.sender, amount, ethAmount);
    }

    // Função de emergência para o dono resgatar ETH sobrando
    function rescueETH() public onlyOwner {
        payable(owner).transfer(address(this).balance);
    }
}

