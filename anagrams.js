let a = "listen";
let b = "silen";

const stacka ={}

const stackb={}

if(a.length === b.length){

    a = a.split('').sort().join();
    b = b.split('').sort().join();
    if( a === b){
        console.log("is a anagram");
    }
}
else{
    console.log("not a anagram")
}