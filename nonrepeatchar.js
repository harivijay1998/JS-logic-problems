const name ="hhrivijay"

const stack=[]

const seen={}
for(const char of name){
    if(stack[char]){
        stack[char] +=1;
    }
    else{
        stack[char]=1
    }

}
console.log(stack)
for(const char of name){
    if(stack[char]===1){
        console.log([char])
        break;
    }
}


