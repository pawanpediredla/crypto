const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(
        'educate lemon machine stool mail chef expire then hire wood opera differ', // Replace with your mnemonic
        'http://localhost:8545', +
        0, 
        10 
      ),
      network_id: '*' // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0" // Specify the Solidity compiler version
    }
  }
};
