const { sync: commandExists } = require('command-exists');
const fs = require("fs-extra");

export default function gitDownload(appName) {
  if(!appName) {
    throw new Error("Must pass argument to create-mwc-app init");
  }
  
  if (!commandExists('git')) {
    throw new Error("git must be installed and on the cli path.");
  }
  const { execSync } = require('child_process');
  const repo = "https://github.com/ALMaclaine/mcw-app-template";
  execSync(`git clone ${repo}`);
  fs.removeSync("mcw-app-template/.git");
  fs.moveSync("mcw-app-template", appName);
}

