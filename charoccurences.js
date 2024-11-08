const counts={};

const input="harivijay";

for(let char of input){
    if(counts[char]){
        counts[char]++
    }
    else{
        counts[char] =1;
    }
}

console.log(counts)