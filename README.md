# Blockchain-Based-Transparency-Of-Accounts-in-Voluntary-Organisations
 Project Description

This project is a decentralized donation and fund management system designed to improve transparency, security, and trust in charitable organizations. Traditional donation platforms rely on centralized databases where financial records can be modified or hidden, creating risks of fund misuse and lack of accountability. To overcome these issues, this system leverages blockchain technology to ensure that every donation, allocation, and withdrawal is permanently recorded and publicly verifiable.

By using smart contracts and wallet-based authentication, the platform removes intermediaries and automates the entire fund flow process. This guarantees that transactions are secure, tamper-proof, and executed exactly according to predefined rules. The system provides donors with full visibility of how their contributions are used, thereby increasing trust and reliability.

🛠️ Technologies Used

Frontend – HTML, CSS, JavaScript

Blockchain Interaction – Web3.js

Wallet Authentication – MetaMask

Smart Contracts – Solidity

Blockchain Network – Ethereum Foundation Ethereum

Local Testing – Ganache

Runtime Environment – Node.js

 System Architecture

The system follows a layered architecture to ensure modularity and security. Users interact with the application through a simple interface where they can donate, allocate funds, or request withdrawals. The application logic validates these requests and prepares them for blockchain execution. Web3.js acts as a bridge between the application and the Ethereum blockchain, sending transactions to smart contracts and retrieving real-time updates. MetaMask handles secure wallet-based authentication and digital signatures. Smart contracts automate fund management, while the blockchain ledger stores all transactions immutably. Ganache provides a private test environment for safe development and deployment.

 How It Works

First, users connect their wallet through MetaMask to securely authenticate themselves. When a donor initiates a donation or an administrator allocates funds, the request is processed by the application and converted into a blockchain transaction using Web3.js. The user digitally signs the transaction, which is then executed by the smart contract. Once validated, the transaction is recorded on the blockchain and cannot be altered. The system listens for confirmation events and immediately updates the user with the transaction status. This process ensures that every financial action is transparent, secure, and traceable.

 Conclusion

This project demonstrates how blockchain technology can transform traditional donation systems by introducing decentralization, automation, and trust. By combining smart contracts, wallet authentication, and immutable ledger storage, the system ensures complete transparency and accountability of funds. It provides a reliable and secure solution for charities, NGOs, and voluntary organizations to manage donations efficiently while building greater confidence among donors.
