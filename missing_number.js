const arr =[1,2,4,5]

const n = arr.length+1;

const totalsum = (n*(n+1))/2

const array_sum = arr.reduce((acc,num)=>acc+num,0);

const missing_num= (totalsum-array_sum);
console.log(missing_num)