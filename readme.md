#Install packages

npm install 

#Config Mnemonic env variable:

Copy Mnemonic on Metamask extension. If you forgot it, you can reset it on Settings.

On Windows, open PowerShell and use bellow command: 

$env:MNEMONIC='12 words of your mnemory bla bla bla'

#Config Infura URL env variable:

Register Infura URL on https://infura.io/ . Check email to receive Infura URL.

On Windows, open PowerShell and use bellow command: 

$env:INFURA_URL="https://rinkeby.infura.io/yourgeneratedcode"

#compile contract:

 node ./compile.js

#run unit test: 

npm run test

 #deploy to Rineby Test Net: 

 node ./deploy.js


