const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { ethers } = require('ethers');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve static files
app.use(express.static(__dirname + '/public'));

// Socket.IO connection and event handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle new messages
  socket.on('chat message', (message) => {
    console.log('Received message:', message);

    // Broadcast the message to all connected clients
    io.emit('chat message', message);
  });

  // Handle hiring process
  socket.on('hireFreelancer', async (hireInfo) => {
    try {
      // Balance checking logic
      const userAddress = hireInfo.userAddress;
      const requiredAmount = hireInfo.requiredAmount;

      // Replace with your Ethereum node endpoint
      const provider = new ethers.providers.JsonRpcProvider('YOUR_NODE_ENDPOINT');

      // Replace with the deployed contract address
      const contractAddress = 'YOUR_CONTRACT_ADDRESS';

      // Replace with the addresses of employer and freelancer
      const employerAddress = 'EMPLOYER_ADDRESS';
      const freelancerAddress = 'FREELANCER_ADDRESS';

      // Create a contract instance
      const contract = new ethers.Contract(
        contractAddress,
        ['function fundContract() external payable', 'function releasePaymentStage1() external', 'function releasePaymentStage2() external', 'function releasePaymentStage3() external', 'function releasePaymentToWebsite() external'],
        provider.getSigner()  // Use the provider's signer to interact with the contract
      );

      // Get the user's balance
      const balance = await provider.getBalance(userAddress);

      // Convert the balance from Wei to Ether
      const balanceInEther = ethers.utils.formatEther(balance);

      // Check if the user has enough funds
      if (parseFloat(balanceInEther) < requiredAmount) {
        io.emit('hireResult', { success: false, message: 'Insufficient funds. Please add funds to your wallet.' });
      } else {
        // Fund the contract with the required amount
        const tx = await contract.fundContract({ value: ethers.utils.parseEther(requiredAmount.toString()) });
        await tx.wait();

        // Simulate the completion of each stage and release payments
        await contract.releasePaymentStage1();
        await contract.releasePaymentStage2();
        await contract.releasePaymentStage3();

        // Release the website fee
        await contract.releasePaymentToWebsite();

        io.emit('hireResult', { success: true, message: 'Freelancer hired successfully.' });
      }
    } catch (error) {
      console.error('Error hiring freelancer:', error.message || error);
      io.emit('hireResult', { success: false, message: 'Error hiring freelancer.' });
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Example usage

