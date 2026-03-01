//synchronous javascript - synchronous javascript code runs in sequence, meaning javascript executes one line at a time and each line waits for the previous line to executes
//it means,
    //no one can skip if one line takes time, everything stops 

    //There are two types of js 1.synchronous and 2.asynchronous js

    console.log("1.Start");
    function slowwork(){
        for(let i=1; i<=1000000; i++){}
    }

    slowwork();
    console.log("2.End");

    //o/p : 1.start -> 2 3 sec delay -> 2.End

    //means it must to stop until the loop complete its repetiotion and then executes next code.