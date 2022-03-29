const JSONDB = "https://api.jsonstorage.net/v1/json/6a7cb59b-9324-4b7d-9468-d82067bfac53/9f32aa2f-5d27-4373-9f76-0f3637006d13?apiKey=b8c09898-174a-4b5b-b1be-4bd3cc1d7d1e";
// [{"compliment":"nice", "time":901324032414132}]
async function getCompliments(url) {
    let response = await fetch(url);
    return response.json();
}
async function addCompliment(url, compliment) {
    const d = new Date();
    let time = d.getTime();
    let compliments = await getCompliments(JSONDB);
    let newCompliment = {
        compliment: compliment,
        time: time
    };
    compliments.push(newCompliment);
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(compliments)
    };
    let response = fetch(url, requestOptions);
    return response;
}
async function clearCompliments(url) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([])
    };
    let response = fetch(url, requestOptions);
    return response;
}
async function main() {
    // await clearCompliments(JSONDB)
    console.log(await addCompliment(JSONDB, "UwU wauw dankje wel"));
// compliments = await getCompliments(JSONDB)
// console.log(compliments.compliments);
}
async function submitComp() {
    let compliment = document.getElementById('compInput').value;
    if (filter(compliment) || compliment == "") {
        console.log("bad words!");
        return false;
    }
    sendAnimation();
    // document.getElementById('give-compliment').style.display = "none"
    // document.getElementById('get-compliment').style.display = "flex"
    let complimentsList = await getCompliments(JSONDB);
    await addCompliment(JSONDB, compliment);
    let personalCompliment = complimentsList[complimentsList.length - 1];
    console.log(personalCompliment.compliment);
    document.getElementById("compliment").innerHTML = personalCompliment.compliment;
}
test() // main()
;

//# sourceMappingURL=index.1f0f226d.js.map
