const comps = require("./comps.js");

const curriedPrefix = pre => {
  return e => console.log(`${pre}${e}`);
}

module.exports = function listComps(arg) {
  let f;
  if(arg === "npm") {
    const prefixNPM = "@material/";
    f = curriedPrefix(prefixNPM);
  } else if(arg === "git") {
    const prefixGIT = "https://github.com/material-components/material-components-web/tree/master/packages/mdc-";
    f = curriedPrefix(prefixGIT);
  } else if(arg === "name") {
    f = curriedPrefix("");
  } else {
    console.error("Invalid argument passed to create-mwc-app list, use one of npm, git or name.");
    process.exit();
  }
  comps.map(e => f(e));
}
