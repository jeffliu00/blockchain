const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./test/compile');

const provider = new HDWalletProvider(
 'motor morning foot sell illness caught system circle rival suggest egg famous',
 'https://rinkeby.infura.io/v3/22684f2c22614e8081b125cf206f7aa6',

);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['Testing message']})
        .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed to', result.options.address);
};

deploy();