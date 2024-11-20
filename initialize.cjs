import 'dotenv/config';
const execSync = require('child_process').execSync;

// Function to execute and log s
function exe(command) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
  }
}

function identityExists(identity) {
  try {
    execSync(`stellar keys show ${identity}`, { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function fundAll() {
  const rpcUrl = process.env.PUBLIC_SOROBAN_RPC_URL;
  const networkPassphrase = process.env.PUBLIC_SOROBAN_NETWORK_PASSPHRASE;
  const network = process.env.SOROBAN_NETWORK;
  const account = process.env.SOROBAN_ACCOUNT;

  if (!identityExists('josealfredoroman_unique')) {
    exe('stellar keys generate --network testnet josealfredoroman_unique --fund');
    exe('stellar keys fund --network testnet josealfredoroman_unique');
  } else {
    console.log('Identity josealfredoroman_unique already exists');
  }

  if (!identityExists('josealfredoroman')) {
    exe('stellar keys generate --network testnet josealfredoroman --fund');
    exe('stellar keys fund --network testnet josealfredoroman');
  } else {
    console.log('Identity josealfredoroman already exists');
  }

  exe(`stellar keys generate --network ${network} ${account}`);
}

console.log('###################### Initializing ########################');
fundAll();
