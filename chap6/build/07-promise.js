"use strict";

var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        var num = Math.round(Math.random() * 20);
        var visited = num % 2;
        if (visited) {
            resolve(num);
        } else {
            retject(num);
        }
    }, 2000);
});

p.then(function (num) {
    console.log("홀수" + num);
}).catch(function (num) {
    console.log(num);
});

console.log("2초뒤에");