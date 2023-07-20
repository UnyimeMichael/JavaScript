//import {sum} from "../Introduction/sum.js";
const sum = require("../Introduction/sum.js")
test.only("that 5 + 3 equals 8", () => {
    expect(sum(5, 3)).toBe(8)

});

