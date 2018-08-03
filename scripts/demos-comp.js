const comps = require("./comps.js");
const opn = require('opn');

module.exports = function demoComp(arg) {
  if (arg === "repo") {
    opn("https://github.com/material-components/material-components-web/tree/master/demos", { wait: false });
  } else if (arg === "hosted") {
    opn("http://material-components-web.appspot.com/");
  } else if (comps.indexOf(arg) !== -1) {
    opn("")
    const prefixGIT = "https://material-components.github.io/material-components-web-catalog/#/component/";
    opn(`${prefixGIT}${arg}`);
  } else {
    console.error("Invalid argument passed to create-mwc-app demos, pass repo, hosted or a valid component name.");
    console.log("\tYou can see all components with create-mwc-app list.");
    process.exit();
  }
}
