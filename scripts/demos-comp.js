const comps = require("./comps.js");
const opn = require('opn');

module.exports = function demoComp(arg) {
    let url;
    if (arg === "repo") {
        url = "https://github.com/material-components/material-components-web/tree/master/demos";
    } else if (arg === "hosted") {
        url = "http://material-components-web.appspot.com/";
    } else if (comps.indexOf(arg) !== -1) {
        const prefixGIT = "https://material-components.github.io/material-components-web-catalog/#/component/";
        url = `${prefixGIT}${arg}`;
    } else {
        console.error("Invalid argument passed to create-mwc-app demos, pass repo, hosted or a valid component name.");
        console.log("\tYou can see all components with create-mwc-app list.");
        process.exit();
    }
    opn(url, {
        wait: false
    });
}
