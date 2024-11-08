const original ={
    name:"hari",
    city:"chennai",
    hobbies:["coding","music"]
}

const cloneobj = structuredClone(original)

const clone =JSON.parse(JSON.stringify(original));

clone.city="bangalore";

clone.hobbies.shift();

cloneobj.hobbies.push("cricket");

cloneobj.city="coimbatore";

console.log(original)
console.log(cloneobj)
console.log(clone)