const arg1 = process.argv[2] && process.argv[2].toLowerCase();
const arg2 = process.argv[3] && process.argv[3].toLowerCase();

const gitComp = require("scripts/gitComp.js");
const gitDL = require("scripts/git-download.js");
const listComps = require("scripts/list-comps.js");
const npmComp = require("scripts/npm-comp.js");
const openComp = require("scripts/open-comp.js");
