const { ethers } = require('ethers');
const { MongoClient } = require('mongodb');
const contractABI = require('./contractAbi.json'); // Adjust the path based on your project structure

// Replace with your MongoDB connection string
const mongoUri = 'YOUR_MONGO_CONNECTION_STRING';

// Replace with your Ethereum node endpoint
const nodeEndpoint = 'YOUR_NODE_ENDPOINT';

// Replace with the contract owner's private key
const ownerPrivateKey = 'YOUR_OWNER_PRIVATE_KEY';

// Add the contract bytecode
const contractBytecode = require('./bytecode.json').bytecode;// Replace with your actual contract bytecode

async function main() {
  let client;
  try {
    // Connect to MongoDB
    client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    const db = client.db('yourDatabaseName');
    const addressesCollection = db.collection('addresses');

    // Get employer and freelancer addresses from MongoDB
    const { employer, freelancer } = await addressesCollection.findOne({});

    // Initialize Ethereum provider and signer
    const provider = new ethers.providers.JsonRpcProvider(nodeEndpoint);
    const ownerWallet = new ethers.Wallet(ownerPrivateKey, provider);

    // Check employer's balance
    const employerBalance = await provider.getBalance(employer);
    const requiredAmount = 1; // Adjust as needed
    if (employerBalance.lt(ethers.utils.parseEther(requiredAmount.toString()))) {
      console.log('Employer has insufficient funds.');
      return;
    }

    // Deploy the smart contract
    const contractFactory = new ethers.ContractFactory(contractABI, contractBytecode, ownerWallet);
    const contract = await contractFactory.deploy(employer, freelancer);
    await contract.deployed();

    console.log('Contract deployed successfully!');

    // Fund the contract
    const fundTransaction = await contract.connect(ownerWallet).fundContract({ value: ethers.utils.parseEther('1') });
    await fundTransaction.wait();

    console.log('Contract funded successfully!');

    // Simulate the completion of each stage and release payments
    await contract.connect(ownerWallet).releasePaymentStage1();
    console.log('Payment released for Stage 1');

    await contract.connect(ownerWallet).releasePaymentStage2();
    console.log('Payment released for Stage 2');

    await contract.connect(ownerWallet).releasePaymentStage3();
    console.log('Payment released for Stage 3');

    // Release the website fee
    await contract.connect(ownerWallet).releasePaymentToWebsite();
    console.log('Website fee released');

  } catch (error) {
    console.error('Error:', error.message || error);
  } finally {
    // Close the MongoDB connection
    if (client) {
      await client.close();
    }
  }
}

main();
