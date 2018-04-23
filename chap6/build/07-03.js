"use strict";

function addContact(name, mobile) {
    var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "없음";
    var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "없음";
    var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "없음";

    var str = "name=" + name + ",mobile=" + mobile + ",home=" + home + ",address=" + address + ",email=" + email;
    console.log(str);
}

addContact("홍길동", "01091476976");
addContact("홍길동", "01091476976", "0245454", "서울시");