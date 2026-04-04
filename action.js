// @ts-check
import { getInput, setOutput, setFailed, info } from "@actions/core";
import madge from "madge";

main();

async function main() {
  try {
    const hasCircularity = await analyze(
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

/**
 * @param {string[]} entry
 * @param {string[]} fileExtensions
 */
export async function analyze(entry, fileExtensions) {
  const analysis = await madge(entry, {
    fileExtensions,
  });

  const circular = analysis.circular();

  circular.forEach((item, i) => {
    info(`${i + 1}) ${item.join(" > ")}`);
  });

  return circular.length !== 0;
};


/** @param {string} input */
function toArray(input) {
  return input.split("\n").filter(Boolean);
}
