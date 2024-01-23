const { ethers } = require('ethers');

// Replace with your Ethereum node endpoint
const provider = new ethers.providers.JsonRpcProvider('YOUR_NODE_ENDPOINT');

// Replace with your private key
const privateKey = 'YOUR_PRIVATE_KEY';
const wallet = new ethers.Wallet(privateKey, provider);

// Replace with the deployed contract address
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// Replace with the addresses of employer and freelancer
const employerAddress = 'EMPLOYER_ADDRESS';
const freelancerAddress = 'FREELANCER_ADDRESS';

// Create a contract instance
const contract = new ethers.Contract(contractAddress, ['function fundContract() external payable', 'function releasePaymentStage1() external', 'function releasePaymentStage2() external', 'function releasePaymentStage3() external', 'function releasePaymentToWebsite() external'], wallet);

// Function to fund the contract
async function fundContract() {
    const tx = await contract.fundContract({ value: ethers.utils.parseEther('1') });
    await tx.wait();
    console.log('Contract funded successfully!');
}

// Function to release payment for each stage
async function releasePayments() {
    await contract.releasePaymentStage1();
    console.log('Payment released for Stage 1');

    await contract.releasePaymentStage2();
    console.log('Payment released for Stage 2');

    await contract.releasePaymentStage3();
    console.log('Payment released for Stage 3');
}

// Function to release website fee
async function releaseWebsiteFee() {
    await contract.releasePaymentToWebsite();
    console.log('Website fee released');
}

// Example usage
async function main() {
    // Fund the contract
    await fundContract();

    // Simulate the completion of each stage and release payments
    await releasePayments();

    // Release the website fee
    await releaseWebsiteFee();
}

main().catch(error => console.error(error));