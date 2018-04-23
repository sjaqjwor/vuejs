"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name, tel, address) {
    _classCallCheck(this, Person);

    this.naeme = name;
    this.tel = tel;
    this.address = address;
    if (Person.count) {} else {
        Person.count = 1;
        console.log(Person.count);
    }
};

var p1 = new Person("asd", "asd", "asda");