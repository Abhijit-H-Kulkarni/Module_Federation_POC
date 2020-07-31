import * as React from "react";

var array = require('array');

var demoArray = array();

demoArray.push(1);
demoArray.push(2);
demoArray.push(3);

const Button2 = () => {
console.log(demoArray);
return(
<button>App 2 Remote Button</button>
)};

export default Button2;
