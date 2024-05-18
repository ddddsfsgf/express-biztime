/** Server startup for BizTime. */

const { argv } = require("process");
const app = require("./app");

app.listen(3000, function(){
    console.log("server running")
});