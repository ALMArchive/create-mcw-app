const comps = require("./comps.js");

module.exports = function getComp(arg) {
  if (comps.indexOf(arg) !== -1) {
    const prefixGIT = "https://github.com/material-components/material-components-web/tree/master/packages/mdc-";
    console.log(`${prefixGIT}${arg}`);
  } else {
    console.error("Invalid argument passed to create-mwc-app comp, select a valid component.");
    console.log("\tYou can see all components with create-mwc-app list.");
    process.exit();
  }
}

