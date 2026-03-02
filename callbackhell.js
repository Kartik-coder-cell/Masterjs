//callback hell - when we have multiple nested callbacks, it becomes difficult to read and maintain the code. This is known as callback hell.
//so this style of programming becomes difficult to understand and manage, especially when we have multiple levels of nesting. It can lead to code that is hard to read and debug.

function getdata(dataid, getnextdata){
    setTimeout(() =>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    },3000);
}

getdata(1, ()=>{
    console.log("getting data 2...");
    getdata(2, ()=>{
        console.log("getting data 3...");
        getdata(3, ()=>{
            console.log("getting data 4...");    //so this is the callback hell, we have multiple nested callbacks, it becomes difficult to read and maintain the code.
            getdata(4, ()=>{
                console.log("Sucesssss");
            });
        });
    });
    
});
