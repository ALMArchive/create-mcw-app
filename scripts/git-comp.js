const comps = require("./comps.js");


export default function getComp(arg) {
  let f;
  if (comps.indexOf(arg) !== -1) {
    const prefixGIT = "https://github.com/material-components/material-components-web/tree/master/packages/mdc-";
    console.log(`${prefixGIT}${arg}`);
  } else {
    console.error("Invalid argument passed to create-mwc-app npm, select a valid component.");
    console.log("\n\tYou can see all components with create-mwc-app list\n");
    process.exit();
  }
}

