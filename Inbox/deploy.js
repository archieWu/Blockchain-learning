const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'daughter all portion wrong cave hat wait blur someone agree display board',
    'https://rinkeby.infura.io/v3/14b6e708ef5d425a969414729a5cc0e9'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hi there!']
        })
        .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

    console.log('Contract deployed to', result.options.address);
};

deploy();
