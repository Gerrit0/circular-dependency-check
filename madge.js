// @ts-check
const madge = require("madge");

/**
 * @param {string[]} entry
 * @param {string[]} fileExtensions
 */
exports.madge = async function (entry, fileExtensions) {
  const analysis = await madge(entry, {
    fileExtensions,
  });

  const circular = analysis.circular();

  circular.forEach((item, i) => {
    console.log(`${i}) ${item.join(" > ")}`);
  });

  return circular.length !== 0;
};
