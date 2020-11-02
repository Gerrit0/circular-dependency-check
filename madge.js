// @ts-check
const madge = require("madge");

/**
 * @param {string[]} entry
 * @param {string[]} extensions
 */
exports.madge = async function (entry, extensions) {
  const analysis = await madge(entry, {
    extensions,
  });

  const circular = analysis.circular();

  circular.forEach((item, i) => {
    console.log(`${i}) ${item.join(" > ")}`);
  });

  return circular.length !== 0;
};
