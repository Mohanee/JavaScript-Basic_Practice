let diceMap = new Map();

function GetRandomDiceNumber()
{
    return(Math.floor(Math.random()*10) %6);
}

//initializing all the values for corresponding key to 0;
let keyCounter =1;
while(keyCounter<=6)
{
    diceMap.set(keyCounter,0)
    keyCounter++;
}

//function to check weather the map contains any value =10
const checkValue10 = (diceMap) =>
{
    for(let[k,v] of diceMap)
    {
        if(v==10)
        {
            return true;
        }
    }
    return false;
}

//setting random dice numbers and incrementing its corresponding value
while(!checkValue10(diceMap))
{
    randomNumber= GetRandomDiceNumber();
    if(randomNumber==0)
    {
        randomNumber=6;
    }
    diceMap.set(randomNumber,diceMap.get(randomNumber)+1);
}
console.log(diceMap);


//BirthDay Anniversary
let birthMap = new Map();

function GetRandomMonth()
{
    return((Math.floor(Math.random()*100)%12) +1);
}

let monthCounter =1;
while(monthCounter<=12)
{
    let peopleArray = new Array();
    birthMap.set(monthCounter, peopleArray);
    monthCounter++;
}

let peopleCounter=1;
while(peopleCounter<=50)
{
    randomMonth = GetRandomMonth();
    let getArray = birthMap.get(randomMonth);
    //console.log(getArray);
    getArray.push(peopleCounter);
    birthMap.set(randomMonth,getArray);
    peopleCounter++;
}

console.log(birthMap);