function romanToNum(roman){
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let prevalue=0;
    let total=0;
    for(let i=0 ; i<roman.length;i++){
        const currentvalue=romanMap[roman[i]]

        if(currentvalue> prevalue){
            total +=currentvalue -2*prevalue;
        }
        else{
            total += currentvalue
        }
        prevalue=currentvalue;
    }

    return total

}

console.log(romanToNum("LVIII"))