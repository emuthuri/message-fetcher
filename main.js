const { LineaSDK } = require('@consensys/linea-sdk'); // Importing the Linea SDK
const dotenv = require('dotenv'); // Module to load environment variables
const path = require('path'); // Node.js path module to handle and transform file paths

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '.env') });

// Initialize Linea SDK with parameters for L1, L2 RPC URLs and private keys
const sdk = new LineaSDK({
    l1RpcUrl: process.env.L1_RPC_URL ?? "",
    l2RpcUrl: process.env.L2_RPC_URL ?? "",
    l1SignerPrivateKey: process.env.L1_SIGNER_PRIVATE_KEY ?? "",
    l2SignerPrivateKey: process.env.L2_SIGNER_PRIVATE_KEY ?? "",
    network: "linea-mainnet",
    mode: "read-only",
});

// Fetch the Linea L1 contract through the SDK
const l1Contract = sdk.getL1Contract();

// Function to fetch message details by the provided message hash
async function fetchMessageByHash(messageHash) {
    try {
        // Fetch message details using the message hash
        const message = await l1Contract.getMessageByMessageHash(messageHash);

        // If no message is found, log an error message
        if (!message) {
            console.error(`No message found for hash: ${messageHash}`);
            return;
        }

        // Manually logging specific fields of the found message for specificity
        console.log('Message Data:', {
            sender: message.messageSender,
            destination: message.destination,
            fee: message.fee,
            value: message.value,
            messageNonce: message.messageNonce,
            calldata: message.calldata,
            messageHash: message.messageHash,
        });
    } catch (error) {
        console.error('Error fetching message:', error);
    }
}

const messageHash = '0x73783A54FE6AA69FB89C63073473898789F1894829EFDD0751032A5C1B88FDAD'; // Chosen message hash. L1 Txn hash 0xdfd07e46a3e93741fd5e4194150c0dfe39ec8d126f28f473d5d65d0d5d5ee5f8
fetchMessageByHash(messageHash);
