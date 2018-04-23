function addContact(name,mobile,home="없음",address="없음",email="없음"){
    let str =`name=${name},mobile=${mobile},home=${home},address=${address},email=${email}`;
    console.log(str);
}

addContact("홍길동","01091476976");
addContact("홍길동","01091476976","0245454","서울시");