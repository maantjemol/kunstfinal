// const JSONDB = "https://api.jsonstorage.net/v1/json/6a7cb59b-9324-4b7d-9468-d82067bfac53/9f32aa2f-5d27-4373-9f76-0f3637006d13?apiKey=b8c09898-174a-4b5b-b1be-4bd3cc1d7d1e"
const JSONDB = ""
// [{"compliment":"nice", "time":901324032414132}]
import {
    Jsonbox,
    combineFilters,
    generateApiKey,
    valueOf,
} from 'jsonbox-client';

const boxOptions = {
    // apiKey: '', // only used with protected boxes
    origin: 'http://server.maantjemol.com:3123', // this is the default, but you could also connect to a different jsonbox server
};

const boxId = "box_2eb7b42fe95dbf8a1202"

const jsonbox = new Jsonbox(boxId, boxOptions);

const {create, meta, read, remove, update} = jsonbox;

function test(){
    console.log("uwu");
}

async function getCompliments(){
    let response = await read();
    return response
}

async function addCompliment(compliment){
    let newCompliment = { compliment: compliment}
    response = await create(newCompliment) 
    return response
}

async function clearCompliments(url){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([])
    };

    let response = fetch(url, requestOptions)
    return response
}


async function main(){
    // await clearCompliments(JSONDB)
    console.log(await addCompliment("UwU wauw dankje wel"));
    console.log(await getCompliments())
}


async function submitComp(){
    let compliment = document.getElementById('compInput').value
    if(filter(compliment) || compliment == ""){
        alert("bad words!");
        return false
    }
    sendAnimation()
    // document.getElementById('give-compliment').style.display = "none"
    // document.getElementById('get-compliment').style.display = "flex"

    let complimentsList = await getCompliments(JSONDB)
    await addCompliment(compliment)

    
    let personalCompliment = complimentsList[0]
    
    // console.log(personalCompliment.compliment);

    document.getElementById("compliment").innerHTML = personalCompliment.compliment
}



window.submitComp = submitComp

// test()
// main()