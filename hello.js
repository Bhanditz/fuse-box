const build = require("./build/commonjs/index.js");

const FuseBox = build.FuseBox;
const fs = require("fs");


let fuseBox = new FuseBox({
    homeDir: "test/fixtures/cases/case1",
    modulesFolder: "test/fixtures/modules",
    plugins: [build.HTMLPlugin, build.JSONPlugin]
});
fuseBox.bundle("**/*.*(js|html) > index.js", true).then(data => {
    fs.writeFile("./out.js", data, function(err) {});
}).catch(e => {
    console.log(e);
})