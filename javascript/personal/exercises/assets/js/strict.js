// 'use strict';

var obj = { which: { has: { really: { deep: { nesting: {
            value: "a val",
            toString: function() { return "value: "+this.value; }
} } } } } };


with (obj.which.has.really.deep.nesting) { // throws exception
  console.log(toString());
  value = "changed!";
}

console.log(obj.which.has.really.deep.nesting.toString());

var num = 042;
// alert(num); // alerts 34

var static = "static is a string!"; // throws exception
 
function private() {
};

console.log(static);

function eval(code) { // throws exception
  var arguments = []; // throws exception
}

function whoCalled() {
   if (whoCalled.caller == null)
      console.log('I was called from the global scope.');
   else
      console.log(whoCalled.caller + ' called me!');
}

whoCalled();

function newVarFromEvalLoose() {
  eval("var newvar = 'value';"); // creates variable in outer scope
  alert(newvar); // alerts "value"
}
function newVarFromEvalStrict() {
  "use strict";
  eval("var newvar = 'value';"); // creates variable only within the eval scope
  alert(newvar); // throws exception -- newvar is not defined
}
 
newVarFromEvalLoose();
newVarFromEvalStrict();

var obj = {};
Object.defineProperty(obj, "const", { value: "const val", writable: false });
 
function setLoose(val) {
  obj.const = val; // no errors, but does not change the value
}
function setStrict(val) {
  "use strict";
  obj.const = val; // throws exception
}
 
alert("starting value: " + obj.const); // alerts "starting value: const val"
setLoose("new val 1");
alert("modified 1: " + obj.const); // alerts "modified 1: const val"
setStrict("new val 2");
alert("modified 2: " + obj.const); // doesn't get this far because of the runtime exception above