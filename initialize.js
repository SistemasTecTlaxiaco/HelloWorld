import 'dotenv/config';
import { execSync } from 'child_process';

// Function to execute and log shell commands
function exe(command) {
  console.log(command);
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
  if (!identityExists('josealfredoroman')) {
    exe('stellar keys generate --network testnet josealfredoroman --fund');
    exe('stellar keys fund --network testnet josealfredoroman');
  } else {
    console.log('Identity josealfredoroman already exists');
  }

  if (!identityExists('josealfredoroman_unique')) {
    exe('stellar keys generate --network testnet josealfredoroman_unique --fund');
    exe('stellar keys fund --network testnet josealfredoroman_unique');
  } else {
    console.log('Identity josealfredoroman_unique already exists');
  }
}

console.log('###################### Initializing ########################');
fundAll();
