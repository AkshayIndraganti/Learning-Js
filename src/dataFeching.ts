async function DataForApi() {
    const RealUrl = await fetch("https://wordle-data.herokuapp.com/letters");
    const JsonedUrl = await RealUrl.json()
    console.log(JsonedUrl);
    return JsonedUrl
}
DataForApi()


const NextApi = async () => {
    const res = await fetch("https://wordle-data.herokuapp.com/letters")
    const data = await res.json()
    console.log(data);

}
NextApi()