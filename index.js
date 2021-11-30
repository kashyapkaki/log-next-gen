"use strict";
/* ***********************************************************************************
This is a console log wrapper which gives more readable output format.
Made this package for developer ease and light weight. Please feel free to clone and
enhance the code if you have ideas for better modern console logging. Thank you!
*********************************************************************************** */

// ultimate wrapper function for log
const log = (data, isStyled, styles) => {
  if (typeof data == "object") {
    console.table(data);
  } else if (typeof isStyled == "boolean" && isStyled) {
    let msgStyles = styles ? styles : "color:blue;font-style:italic";
    console.log("%c".concat(data), msgStyles);
  } else {
    console.log(data);
  }
};

// Used for assertion based on the condition
const assertion = (condition, assertFailMsg) => {
  if (typeof condition == "boolean") {
    let failMsg = assertFailMsg ? assertFailMsg : "Condition failed!!";
    console.assert(condition, failMsg);
  }
};

// Used for calculating the execution time of specific code (in millisecs)
const execTime = {
  start: () => {
    return console.time();
  },
  end: () => {
    return console.timeEnd();
  },
};
module.exports = { log, assertion, execTime };
