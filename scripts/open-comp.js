const comps = require("./comps.js");
const arg = process.argv[2] && process.argv[2].toLowerCase();

const opn = require('opn');

export default function openComp(arg) {
  let f;
  
  if (comps.indexOf(arg) !== -1) {
    const prefixGIT = "https://github.com/material-components/material-components-web/tree/master/packages/mdc-";
    opn(`${prefixGIT}${arg}`, {wait: false});
  } else {
    console.error("Invalid argument passed to create-mwc-app npm, select a valid component.");
    console.log("\n\tYou can see all components with create-mwc-app list\n");
    process.exit();
  }
}
