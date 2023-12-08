# Advanced Sample Hardhat Project

This project demonstrates an advanced Hardhat use case, integrating other tools commonly used alongside Hardhat in the ecosystem.

The project comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts. It also comes with a variety of other tools, preconfigured to work with the project code.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat coverage
npx hardhat run scripts/deploy.ts
TS_NODE_FILES=true npx ts-node scripts/deploy.ts
npx eslint '**/*.{js,ts}'
npx eslint '**/*.{js,ts}' --fix
npx prettier '**/*.{json,sol,md}' --check
npx prettier '**/*.{json,sol,md}' --write
npx solhint 'contracts/**/*.sol'
npx solhint 'contracts/**/*.sol' --fix
```

# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/deploy.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).


# WakandaToken Solidity Project
This project consists of two Solidity smart contracts that together create a token and an election system on the Ethereum blockchain.

# 1. WakandaToken Contract
## Smart Contract Details
- Name: WakandaToken
- Type: ERC-20 Token
- Inheritance: ERC20, Ownable
## Functions
- 'constructor': Initializes the WakandaToken with the name "Wakanda" and the symbol "WKND".
- 'register': Allows the owner to register an address to receive Wakanda tokens.
## Events
- 'CandidateAdded': Triggered when a new candidate is added to the election.
## Usage
- Deploy the 'WakandaToken' contract.
- Register addresses to receive Wakanda tokens using the 'register' function.
# 2. Election Contract
## Smart Contract Details
- Name: Election
- Inheritance: Ownable
## Libraries
- Sort: Implements a quicksort algorithm for sorting an array of candidates.
## Structs
- 'Candidate': Represents information about a candidate, including their id, name, culture, age, and votes.
## Functions
- 'registerCandidate': Allows the owner to register a new candidate for the election.
- 'castVote': Allows registered users to cast votes for candidates.
## Events
- 'CandidateAdded': Triggered when a new candidate is registered for the election.
- 'NewChallenger': Triggered when a new candidate becomes one of the top three candidates.
- 'VoteCasted': Triggered when a vote is cast.
## Usage
- Deploy the Election contract, providing the address of the WakandaToken contract.
- Register candidates using the 'registerCandidate' function.
- Cast votes for candidates using the 'castVote' function.
## Note
- The WakandaToken contract is an ERC-20 token with added functionality to register addresses.
- The Election contract manages an election system where candidates can be registered, and users can cast votes for their preferred candidates.
