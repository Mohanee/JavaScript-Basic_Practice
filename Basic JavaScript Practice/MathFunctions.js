
    //Random Number Operations

    //Add 2 random dice numbers
        let num1= Math.floor((Math.random()*10)%6);
        let num2= Math.floor((Math.random()*10)%6);
        console.log("Your added number is: "+(num1+num2));
    

    //Sum of 5 random 2 digit numbers
    
        let sum = 0;
        for(var i=1; i<=5;i++)
        {
             sum += Math.floor(Math.random()*100);
        }
        console.log("Sum of 5 random 2 digit numbers: "+ sum);
        let avg = sum/5;
        console.log("Average of these numbers: "+ avg);
  

    //Unit Conversions

    const perInch = 12;
    const perFeet = 0.083;
    const perMeter = 0.305;

 /*   function FeetToInches(inch)
    {
        return(inch*perFeeT);
    }

    function InchesToFeet(feets)
    {
        return(feets*perInch);
    }

    function FeetToMeters(feets)
    {
        return(feets*0.305);
    }*/

    //CalculateArea()
    
        let area = perMeter* (60*40);
        console.log("Area: "+area);
    

    // Areaof25Plots()
    
        let totalArea = 25* area;
        console.log("Area of 25 Plots: "+totalArea);

    