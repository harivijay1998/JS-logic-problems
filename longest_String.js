const name = "hari vijay is junior developer frontend "

const myname=name.split(" ");

console.log(myname)

let longword ="";

for(const word of myname){
    if(word.length>longword.length){
        longword= word
        console.log(longword)
    }
}

console.log( "the longest word is :"+longword)