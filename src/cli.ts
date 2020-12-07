import * as commander from "commander";
import {translate} from "./main";

const program = new commander.Command()
const pkg = require('../package.json')

program.version(pkg.version)
    .name('translation-tool')
    .usage('<Word>')
    .arguments('<Word>')
    .action(function (word) {
        translate(word)
    })

program.parse(process.argv)