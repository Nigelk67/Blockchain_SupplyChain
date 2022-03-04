const HDWallet = require('@truffle/hdwallet-provider');
const infuraKey = ""
const mnemonic = ""


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },

  rinkeby: {
    provider: () => new HDWallet({
      mnemonic: {
        phrase: mnemonic
      },
      providerOrUrl: `https://rinkeby.infura.io/v3/${infuraKey}`}),
    network_id: 4,
    gas: 4500000,
    gasPrice: 10000000000
    //from: "0x23836FD7b36dDcB410a11D599f6dEe33765B5583"
  },

  // compilers: {
  //   solc: {
  //     version: "^0.4.24",
  //     docker: false,
  //   }
  // }
};
