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

var s4 = new Set([...s2.values(),...s3.values()]);
var s5 = new Set([...s2.values()].filter(e => s3.has(e)));
console.log(s4);
console.log(s5);

var s6  = new Map();
s6.set("ki","aaa");
s6.set("ki","bbb");
s6.set("ki4","bbb");
console.log(s6);