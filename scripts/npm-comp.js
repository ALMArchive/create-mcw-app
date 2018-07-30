const comps = require("./comps.js");

module.exports = function npmComp(arg) {
  let f;
  if (comps.indexOf(arg) !== -1) {
    const prefixNPM = "@material/";
    console.log(`${prefixNPM}${arg}`);
  } else {
    console.error("Invalid argument passed to create-mwc-app npm, select a valid component.");
    console.log("\tYou can see all components with create-mwc-app list.");
    process.exit();
  }
}
