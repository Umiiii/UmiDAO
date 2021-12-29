import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x615eec4ebb77de4e0689286dDBeef844c3Bfd6cB",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Umi Diamond hand",
        description: "This NFT will give you access to UmiDAO!",
        image: readFileSync("scripts/assets/umi.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()