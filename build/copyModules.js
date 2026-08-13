// Copies the node_modules required in the browser to assets/js/modules.
//
// copy-node-modules always writes to <dest>/node_modules, so the final step renames
// assets/js/node_modules to assets/js/modules. On Windows that rename can transiently
// fail with EPERM/"Permission denied" right after the copy: a virus scanner, the search
// indexer, or a running dev server watching assets/js/ can still hold a handle on one of
// the freshly-copied files for a moment. Retrying after a short delay clears it up, so we
// do that automatically instead of requiring a manual mkdir + rebuild.
const fs = require("fs-extra");
const { execSync } = require("child_process");

const SOURCE = "assets/js/node_modules";
const DEST = "assets/js/modules";
const MAX_ATTEMPTS = 5;
const RETRY_DELAY_MS = 1500;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function moveWithRetry() {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      fs.removeSync(DEST);
      fs.moveSync(SOURCE, DEST);
      return;
    } catch (err) {
      if (attempt === MAX_ATTEMPTS) throw err;
      console.log(
        `Move to ${DEST} failed (${err.message}), retrying in ${RETRY_DELAY_MS}ms... (attempt ${attempt}/${MAX_ATTEMPTS})`
      );
      await sleep(RETRY_DELAY_MS);
    }
  }
}

async function go() {
  console.log("Copying required node_modules to assets/js/modules...");
  execSync("copy-node-modules . assets/js -v", { stdio: "inherit" });
  await moveWithRetry();
  console.log("...done copying modules!");
}

go().catch((err) => {
  console.error("Failed to copy modules:", err.message);
  process.exit(1);
});
