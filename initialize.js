
import 'dotenv/config';
import { execSync } from 'child_process';

// Function to execute and log shell commands
function exe(command) {
  console.log(command);
  execSync(command, { stdio: 'inherit' });
}

function fundAll() {
  const rpcUrl = process.env.PUBLIC_SOROBAN_RPC_URL;
  const networkPassphrase = process.env.PUBLIC_SOROBAN_NETWORK_PASSPHRASE;
  const network = process.env.SOROBAN_NETWORK;
  const account = process.env.SOROBAN_ACCOUNT;

  exe(`stellar keys generate --network ${network} ${account}`);
}

console.log('###################### Initializing ########################');
fundAll();
