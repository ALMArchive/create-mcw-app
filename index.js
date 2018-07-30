#!/usr/bin/env node
const arg1 = process.argv[2] && process.argv[2].toLowerCase();
const arg2 = process.argv[3] && process.argv[3].toLowerCase();

const funcs = {
  "init": require("./scripts/git-download.js"),
  "npm":  require("./scripts/npm-comp.js"),
  "list": require("./scripts/list-comps.js"),
  "open": require("./scripts/open-comp.js"),
  "comp": require("./scripts/git-comp.js")
}

if(funcs[arg1]) {
  funcs[arg1](arg2);
} else {
  console.warn(`Invalid argument passed to create-mwc-app, one of: ${Object.keys(funcs).join(", ")}`);
  console.log(`\t${Object.keys(funcs).join(", ")}`);
}
