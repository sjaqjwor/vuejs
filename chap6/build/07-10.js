"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var s1 = new Set();
s1.add("사과");
s1.add("배");
s1.add("사과");
console.log(s1);

var s2 = new Set();
s2.add("사과");
s2.add("배");
s2.add("사과");

var s3 = new Set();
s3.add("바나나");
s3.add("감자");
s3.add("사과");

var s4 = new Set([].concat(_toConsumableArray(s2.values()), _toConsumableArray(s3.values())));
var s5 = new Set([].concat(_toConsumableArray(s2.values())).filter(function (e) {
  return s3.has(e);
}));
console.log(s4);
console.log(s5);

var s6 = new Map();
s6.set("ki", "aaa");
s6.set("ki", "bbb");
s6.set("ki4", "bbb");
console.log(s6);