// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FreelanceContract {
    address public website;
    address public employer;
    address public freelancer;
    uint256 public totalAmount;
    uint256 public websiteFee; // 5% of totalAmount
    uint256 public stage1Amount;
    uint256 public stage2Amount;
    uint256 public stage3Amount;
    bool public stage1Completed;
    bool public stage2Completed;
    bool public stage3Completed;

    event PaymentReleased(uint256 amount, string stage);
    event WebsiteFeeReleased(uint256 amount);

    modifier onlyWebsite() {
        require(msg.sender == website, "Only website can call this function");
        _;
    }

    modifier onlyEmployer() {
        require(msg.sender == employer, "Only employer can call this function");
        _;
    }

    modifier onlyFreelancer() {
        require(msg.sender == freelancer, "Only freelancer can call this function");
        _;
    }

    constructor(address _employer, address _freelancer) {
        website = msg.sender;
        employer = _employer;
        freelancer = _freelancer;
    }


    function fundContract() external payable onlyWebsite {
        require(msg.value > 0, "Funds should be greater than 0");
        totalAmount += msg.value;
        websiteFee = totalAmount * 5 / 100;
        stage1Amount = totalAmount * 20 / 100;
        stage2Amount = totalAmount * 35 / 100;
        stage3Amount = totalAmount * 40 / 100;
    }

    function releasePaymentStage1() external onlyWebsite {
        require(!stage1Completed, "Stage 1 already completed");
        payable(freelancer).transfer(stage1Amount);
        stage1Completed = true;
        emit PaymentReleased(stage1Amount, "Stage 1");
    }

    function releasePaymentStage2() external onlyWebsite {
        require(stage1Completed && !stage2Completed, "Previous stages must be completed");
        payable(freelancer).transfer(stage2Amount);
        stage2Completed = true;
        emit PaymentReleased(stage2Amount, "Stage 2");
    }

    function releasePaymentStage3() external onlyWebsite {
        require(stage2Completed && !stage3Completed, "Previous stages must be completed");
        payable(freelancer).transfer(stage3Amount);
        stage3Completed = true;
        emit PaymentReleased(stage3Amount, "Stage 3");
    }

    function releasePaymentToWebsite() external onlyWebsite {
        payable(website).transfer(websiteFee);
        emit WebsiteFeeReleased(websiteFee);
    }
}