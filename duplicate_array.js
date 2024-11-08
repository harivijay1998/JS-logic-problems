const num =[];

const arr=[1,2,1,3,4,5];

const seen={};


for(let number of arr){
    if(!seen[number]){
        num.push(number);
        seen[number]=true
    }
}

console.log(num)