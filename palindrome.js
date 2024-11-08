var a ="madam"
var b="";
for(i=a.length-1;i>=0;i--){
    console.log(a[i])
    b = b+a[i]
}

if(a === b){
    console.log("its a palindrome")
}
else{
    console.log("not a palindrome")    
}
