const FetchPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const User: Object = {
                Name: 'Akshay',
                Age: 23,
            };

            resolve(User);
        }, 2000)
    })
}


const OutputFetchPromise = async () => {
    console.log("Start");

    const User = await FetchPromise()

    console.log("End");

    console.log(User);
}

OutputFetchPromise();