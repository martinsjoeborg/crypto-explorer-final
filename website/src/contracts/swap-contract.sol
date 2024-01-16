// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract SepoliaETHToERC20Swap {
    IERC20 public erc20Token;
    uint256 public rate; // Number of tokens per 1 ETH

    constructor(address _erc20Token, uint256 _rate) {
        erc20Token = IERC20(_erc20Token);
        rate = _rate;
    }

    function swap() external payable {
        require(msg.value > 0, "Send SepoliaETH to swap");
        uint256 tokenAmount = msg.value * rate;
        require(erc20Token.balanceOf(address(this)) >= tokenAmount, "Insufficient token balance in contract");
        erc20Token.transfer(msg.sender, tokenAmount);
    }

    // Function to withdraw ETH in case of emergency
    function withdrawETH() external {
        payable(msg.sender).transfer(address(this).balance);
    }

    // Function to withdraw ERC20 tokens from the contract
    function withdrawERC20() external {
        erc20Token.transfer(msg.sender, erc20Token.balanceOf(address(this)));
    }
}