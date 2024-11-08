function rotate_array(arr,k){
    const n = arr.length;
    k=k % n;
    if(k ==0)return arr;

    const endpart= arr.slice(-k);
    const startpart = arr.slice(0, n-k);

    return endpart.concat(startpart)
}

const arr =[1,2,3,4,5]
const k = 2;
console.log(rotate_array(arr,k))