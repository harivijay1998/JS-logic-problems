function debounce(func,delay){
    let timeoutid;
    return function (...args){
        if (timeoutid) clearTimeout(timeoutid)
            timeoutid= setTimeout(()=>{
        func.apply(this,args)},delay)
    }
}

function search(query){
    console.log("searching for :"+query)

}

const debouncesearch = debounce(search,2000)

debouncesearch("apple");
debouncesearch("apple pie")
debouncesearch(" apple pie cake")