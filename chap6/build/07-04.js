"use strict";

function foodReport(name, age) {
    console.log(name + " ," + age);

    for (var _len = arguments.length, f = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        f[_key - 2] = arguments[_key];
    }

    console.log(f);
}

foodReport("이", 20, "ㅁㅁㅁ", "ㄴㄴㄴ");
foodReport("이", 20, "ㅁㅁㅁ");