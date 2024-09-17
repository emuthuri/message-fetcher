# Message Fetcher Script Using Linea SDK

This project is a Node.js-based script to fetch details of a message sent via the Linea canonical token bridge from L1 to L2, using the Linea SDK. The script retrieves information based on a specific message hash, including details such as sender, destination, fee, and value.

## Features

- Linea SDK Integration: Utilizes the Linea SDK to interact with L1/L2 contracts.
- Message Details: Fetches and decodes message details from the canonical token bridge.
- Environment Config: Loads RPC URLs, private keys, and other parameters from `.env` file.

## Dependencies

- `@consensys/linea-sdk`: Linea SDK for interacting with the Linea network.
- `dotenv`: Loads environment variables from `.env` file.
- `path`: Handles and transforms file paths.

## Project Structure

.
├── main.js # Main script to fetch message details using Linea SDK
└── .env # Environment variables

## Setup Instructions

### Prerequisites

- **Node.js (v20.17.0)**
- **npm** (Node Package Manager)

### 1. Clone the Repository

```bash
git clone https://github.com/emuthuri/message-fetcher
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` file

L1_RPC_URL=<Your Ethereum L1 RPC URL>
L2_RPC_URL=<Your Linea L2 RPC URL>
L1_SIGNER_PRIVATE_KEY=<Private key for L1 signer>
L2_SIGNER_PRIVATE_KEY=<Private key for L2 signer>
L1_CONTRACT_ADDRESS=0xd19d4B5d358258f05D7B411E21A1460D11B0876F

### 4. Run the Script

```bash
node main.js
```
