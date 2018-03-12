# Install packages

    npm install

# Config Mnemonic env variable:

Copy Mnemonic on Metamask extension. If you forgot it, you can reset it on **Settings/Reveal Seed Words**.
![enter image description here](https://raw.githubusercontent.com/gitvani/nodejs-ethereum/master/readme-images/01.png)

On Windows 10, open **PowerShell** (not cmd) and use bellow command:

    $env:MNEMONIC='12 words of your mnemory'

# Config Infura URL env variable:

Register Infura URL on  [https://infura.io/](https://infura.io/)

Check email to receive Infura URL.

On Windows, open PowerShell and use bellow command:

    $env:INFURA_URL="https://rinkeby.infura.io/yourgeneratedcode"

# Compile contract:

    node ./compile.js

# Run unit test:

    npm run test

# Deploy to Rineby Test Net:

    node ./deploy.js
    
  Make sure you that: You switched to Rineby Test Net on Metamask and you must have a account with Ethers. You can use [https://faucet.rinkeby.io/](https://faucet.rinkeby.io/) to request some Ethers.

