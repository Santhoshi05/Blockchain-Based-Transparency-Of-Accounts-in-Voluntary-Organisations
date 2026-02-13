module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost
      port: 7545,            // Default Ganache GUI port
      network_id: 5777,      // Match your Ganache network ID
      chainId: 1337,         // Match your Ganache chain ID (for MetaMask)
    },
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.17",     // Solidity compiler version
    },
  },
};
