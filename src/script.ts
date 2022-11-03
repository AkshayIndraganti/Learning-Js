console.log("Start");

for (let i: number = 0; i < 1_000_000_000; ++i) { }

setTimeout(() => {
    console.log("this is middle");
}, 2000);

setInterval(() => {
    console.log("This is middle ");
}, 2000)



setTimeout(() => {
    console.log(5)
    setTimeout(() => {
        console.log(4)
        setTimeout(() => {
            console.log(3)
            setTimeout(() => {
                console.log(2)
                setTimeout(() => {
                    console.log(1)
                    setTimeout(() => {
                        console.log(0)
                    }, 5000)
                }, 5000)
            }, 5000)
        }, 5000)
    }, 5000)
}, 5000)

console.log("End")