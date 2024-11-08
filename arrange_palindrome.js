function palindrome(str){
    const freqmap={};

    for (const char of str){
        if(freqmap[char]){
            freqmap[char] += 1;
        }
        else{
            freqmap[char] =1
        }
    }
        let oddcount =0;

        for (const count of Object.values(freqmap)){
            if(count % 2 !== 0){
                oddcount +=1;
            }

            if(oddcount >1){
                return false;
            }
        }
    

    return true;
}

console.log(palindrome("madam"))