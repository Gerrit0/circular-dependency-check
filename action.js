// @ts-check
const { getInput, setOutput, setFailed } = require("@actions/core");
const { madge } = require("./madge.js");

main();

async function main() {
  try {
    const hasCircularity = await madge(
      toArray(getInput("entry", { required: true })),
      toArray(getInput("extensions"))
    );

    setOutput("failed", hasCircularity);
    if (getInput("fail") !== "false" && hasCircularity) {
      setFailed("Circular imports detected!");
    }
  } catch (error) {
    setFailed(error);
  }
}

/** @param {string} input */
function toArray(input) {
  return input.split("\n").filter(Boolean);
}
