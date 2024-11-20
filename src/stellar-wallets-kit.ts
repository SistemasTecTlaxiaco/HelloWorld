import { FreighterApi } from "@stellar/freighter-api";

const kit = new FreighterApi();

async function loadedPublicKey() {
  try {
    const response = await kit.getAddress();
    if (response.error) {
      throw new Error(response.error);
    }
    console.log("Address obtained:", response.address);
    return response.address;
  } catch (error) {
    console.error("Error getting address:", error);
    throw error;
  }
}

export { kit, loadedPublicKey };