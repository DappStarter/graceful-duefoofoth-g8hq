require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain modify grace cricket swift slush'; 
let testAccounts = [
"0x4bf9b6ad5c954b0718707e0c3e5c2d940fe2282e23050a060ceb6e4897673fae",
"0x2d87be457604865a9030172ecfe732b340b8c14ec17eef06c2a02873059ffe29",
"0xf7748ce672467b0a901231249f284955019a80795780b81b9753f26d4e5b00e8",
"0xbd6f3c18bff03bdba5f64bce0dfdf185677c3bf92f80b1be8597a2226ae5c050",
"0x34e5e2d933276ddf4254600685f8436f600336a48181b0652724d07447466a05",
"0x729733ad168956cf65fbca820a0ab86c2e91c1ffdbaa77031bb492b4732fb27f",
"0xf7abeca197c074e573f6151040dafb71ed2439faa4a75241061bfa1a9a1b73e1",
"0xeac620d5c607d6522af3488c58c7a9979f14a772d01fca5bb34b6da8bdefd0bc",
"0xfe8f8430b374ffa389784f8faa3139e96a5217134d91a6a53bd4d2dcc2244aea",
"0x5d1fe5d6cff576724125f976f843016f861376c48f890d1090423f500bac662d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

