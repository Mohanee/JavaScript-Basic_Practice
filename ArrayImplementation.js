let ourArray = new Array();

function RandomNumber()
{
    return(Math.floor(Math.random()*100));
}

for(let i=0;i<10;i++)
{
    ourArray.push(RandomNumber());
}
console.log(ourArray);

//Max Element w/o sorting
let maxElement= ourArray[0];
for(let i=0;i<10;i++)
{
    if(maxElement< ourArray[i])
    {
        maxElement=ourArray[i];
    }
}
console.log("Largest Element : "+maxElement);

//SecondMax Element w/o sorting
let secondMaxElement = ourArray[0];
for(let i=0;i<10;i++)
{
    if(secondMaxElement< ourArray[i] && ourArray[i]!=maxElement)
    {
        secondMaxElement= ourArray[i];
    }
}
console.log("Second Largest Element : "+secondMaxElement);


//Sorting our array
let ourSortedArray = new Array();
ourSortedArray = ourArray;
for(let i=0;i<ourSortedArray.length;i++)
{
    for(let j=1;  j<(ourSortedArray.length-i);  j++)
    {
        if(ourSortedArray[j-1]>ourSortedArray[j])
        {
            let temp= ourSortedArray[j-1];
            ourSortedArray[j-1]= ourSortedArray[j];
            ourSortedArray[j]=temp;
        }
    }
}
console.log(ourSortedArray);
//MaxElement AfterSorting
console.log("Largest Element : "+ourSortedArray[ourSortedArray.length-1]);
console.log("Second Largest Element : "+ourSortedArray[ourSortedArray.length-2]);


//PrimeFactorization
function IsPrime(x)
{
    let factors = 0;
    for(i = 2;i < x ;i++)
    {
        if(x % i == 0)
            factors++;      
    }
    if(factors == 0)
    {
        return true;
    }
    return false;
}

let n= 2345;
let primeFactorsArray= new Array();

function findPrimeFactor(n)
{
    for(let i=2; i<=Math.sqrt(n);i++)
    {
        if(n%i==0 && IsPrime(i))
        {
            primeFactorsArray.push(i);
        }
    }
}
findPrimeFactor(n);
console.log("\nPrime Factors of "+n+" are "+primeFactorsArray);


//Sum of 3 in an array is 0
let myArray = [4, -3, 2, -7, 3, -6]
let zeroArray= new Array();
function IsSum0()
{
    for(let i=0;i<myArray.length;i++)
    {
        for(let j=1;j<myArray.length-1;j++)
        {
            for(let k=2;k<myArray.length-2;k++)
            {
                if(myArray[i]+myArray[j]+myArray[k]==0)
                {
                    zeroArray.push(myArray[i]);
                    zeroArray.push(myArray[j]);
                    zeroArray.push(myArray[k]);
                    return 0;
                }
            }
        }
    }
}
let val = IsSum0();
console.log("Sum to Zero array : "+zeroArray);

//Twice Repeated Numbers
let twinArray = new Array();
for(let i=1;i<100;i++)
{
    if(i%11==0)
    {
        twinArray.push(i);
    }
}
console.log("Twin Array of 2 digit numbers : "+twinArray);