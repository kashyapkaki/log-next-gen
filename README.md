# What is this for?

Next Generation Console Logger. This is a wrapper for console log for modern logging.

# Installation

Adding as dev dependency

`npm i log-next-gen --save-dev`

# Usage

## log Usage

In ES5,

```
const { log } = require("log-next-gen");
```

In ES6,

```
import { log } from "log-next-gen";
```

- Pass Array as argument

```
const users = [
  {
    name: "John",
    location: "London",
  },
  {
    name: "Micheal",
    location: "USA",
  },
];
log(users);
```
Output as below

![alt text](https://github.com/kashyapkaki/log-next-gen/blob/master/output/ArrayOutput.PNG?raw=true)

- Pass Object as argument

```
const item = {
  name: "apple",
  type: "fruit",
};
log(item);
```
Output as below

![alt text](https://github.com/kashyapkaki/log-next-gen/blob/master/output/ObjectCapture.PNG?raw=true)

- Styled logging

```
log("This is styled message", true);
```
Output as below

![alt text](https://github.com/kashyapkaki/log-next-gen/blob/master/output/StyledMsg.PNG?raw=true)

- Custom Styled logging

> You can pass your own styles as third argument

```
var styles = [
  "background: linear-gradient(#035E7B, #62B6CB)",
  "border: 1px solid white",
  "color: white",
  "display: block",
  "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 50px",
  "padding: 20px",
];

log("This is custom styled message", true, styles.join(";"));
```
Output as below

![alt text](https://github.com/kashyapkaki/log-next-gen/blob/master/output/customStyleMsg.PNG?raw=true)

## Assertion Usage

In ES5,

```
const { assertion } = require("log-next-gen");
```

In ES6,

```
import { assertion } from "log-next-gen";
```

- Pass condition as first argument and assertion fail message as second argument

```
assertion(3 % 2 == 0, "number is not even number");
```

## Execution time Usage

In ES5,

```
const { execTime } = require("log-next-gen");
```

In ES6,

```
import { execTime } from "log-next-gen";
```

- Call start and end functions between the code to calculate execution time

```
execTime.start();
setTimeout(function () {
  execTime.end(), 3000;
});
```

## Options

`log-next-gen` supports the below options, which are optional:

- _isStyled_ - true | false (Defaults to false)
- _styles_ - string (Pass styles as string)
- _assertFailMsg_ - string (Default string is Condition failed!!)
