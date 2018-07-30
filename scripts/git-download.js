const { sync: commandExists } = require('command-exists');
const fs = require("fs-extra");

module.exports = function gitDownload(appName) {
  if(!appName) {
    console.warn("Must pass argument to create-mwc-app init.");
    process.exit();
  }

  if(fs.existsSync(appName)) {
    console.warn(`Directory: ${appName} already exists.`);
    process.exit();
  }

  if (fs.existsSync("mcw-app-template")) {
    console.warn(`Directory: mcw-app-template already exists.`);
    console.log("Please delete or work from a different directory.");
    process.exit();
  }
  
  if (!commandExists('git')) {
    console.warn(`git must be installed and on the cli path.`);
    process.exit();
  }
  const { execSync } = require('child_process');
  const repo = "https://github.com/ALMaclaine/mcw-app-template";
  execSync(`git clone ${repo}`);
  fs.removeSync("mcw-app-template/.git");
  fs.moveSync("mcw-app-template", appName);
  console.log(`Finished creating app: ${appName}`);
}
