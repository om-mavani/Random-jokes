const p = document.querySelector("#jokes");
const btn = document.querySelector("button");
const url = " https://icanhazdadjoke.com/";


btn.addEventListener("click", async () => {

    let jokes = await getJokes()
    p.innerText = jokes
})


async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } }
        let req = await axios.get(url, config)
        return req.data.joke
    }
    catch (e) {
        console.log("is error", e);
        return " jokes are not found"
    }
}

