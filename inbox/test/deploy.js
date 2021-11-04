const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
 'motor morning foot sell illness caught system circle rival suggest egg famous',
 'https://rinkeby.infura.io/v3/22684f2c22614e8081b125cf206f7aa6',

);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.
}