var p = new Promise(function(resolve,reject){
    setTimeout(() => {
        let num = Math.round(Math.random()*20);
        let visited = num%2;
        if(visited){
            resolve(num);
        }else{
            reject(num);
        }
    }, 2000);
});

p.then(function(num){
    console.log("홀수"+num);
}).catch(function(num){
    console.log(num)
})

console.log("2초뒤에");