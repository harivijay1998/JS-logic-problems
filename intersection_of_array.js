function intersection(arr1,arr2){
    const set1 = new Set(arr1);
    const result = arr2.filter(item=> set1.has(item))

    return [...new Set(result)]
}

console.log(intersection([1,2,2,1],[2,2]))