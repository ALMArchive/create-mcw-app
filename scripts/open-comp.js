const comps = require("./comps.js");
const opn = require('opn');

module.exports = function openComp(arg) {
  if (comps.indexOf(arg) !== -1) {
    const prefixGIT = "https://github.com/material-components/material-components-web/tree/master/packages/mdc-";
    opn(`${prefixGIT}${arg}`, {wait: false});
  } else if(arg === "repo") {
    opn("https://github.com/material-components/material-components-web");
  } else {
    console.error("Invalid argument passed to create-mwc-app open, select a valid component.");
    console.log("\tYou can see all components with create-mwc-app list.");
    process.exit();
  }
}
