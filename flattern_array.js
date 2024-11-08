const nested_arr = [1, [2, [3, 4], 5], 6, [7, [8, 9]]];

let flatarr = [];

function flatternarray(arr) {
  let flatarr=[]
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatarr = flatarr.concat(flatternarray(item));
    } else {
      flatarr.push(item);
    }

    console.log("flatarr", flatarr);
  });
  return flatarr;
}

console.log('output',flatternarray(nested_arr));
