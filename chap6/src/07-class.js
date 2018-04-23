class Person{
    constructor(name,tel,address){
        this.naeme=name;
        this.tel=tel;
        this.address = address;
        if(Person.count){

        }else{
            Person.count=1;
            console.log(Person.count)
        }
    }
}

var p1 = new Person("asd","asd","asda");