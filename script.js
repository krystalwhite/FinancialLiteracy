let correct = "That is correct!"; 
let wrong = "Sorry, that is incorrect."
let comment2 = "It’s true, at today’s savings interest rates, you would never see your savings account double its value because the interest rate is so low. A savings account is a great place to store money for emergencies and day-to-day expenses, but is not a good place to invest your money for college or retirement."; 
let comment3 = "You will double your money in only 9 years! Since compound interest is not a linear relationship, you get a larger amount of return each year that you save. You can see from the graph that you make your next $1000 at year 14, only 5 additional years of saving."; 
let comment4 = "Compound interest turned the $1000 into $47,000 over time. WOW! If you waited 60 years, compound interest would return $101,000! Those ten years meant a change of $55,000!"; 
let comment5 = "A brand new car loses value as soon as it is purchased and then it continues to lose value each year; this process is called depreciation. As a general rule, a new vehicle loses about 20% of its value in the first year and then about 10% of its value every year that follows. Good financial advice is to buy a used car so that you get the benefit of depreciation when you negotiate the price.";

let comment6 = "A brand new cell phone loses value as soon as it is purchased and it continues to depreciate rapidly- most phones will lose more than half their value within 2 years. Most tech items (cell phones, computers, gaming systems) lose value daily, so there is substantial savings to be had when buying used."; 

let comment7 = "I know, right!? In this situation, the phone actually cost you $1921: $999 for the phone and $921 in interest to the credit card company. Each time you use a credit card, you are taking out a short-term loan with a high interest rate; only paying the monthly minimum balance means that compound interest is working against you, and at a more rapid pace than most investments can match. Paying down credit card debt is always a great financial decision."

let correctAnswer2 = "7000 years"; 
let correctAnswer3 = "9 years"; 
let correctAnswer4 = "$47,000"; 
let correctAnswer5 = "$10,500"; 
let correctAnswer6 = "$480"; 
let correctAnswer7 = "113 months (9 years, 5 months)"; 



function one(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
}; 


function two(){ 
    document.getElementById("nextPageBtn").style.visibility = "visible"; 
    document.getElementById("answerText").innerHTML = "\n \n" + comment2;
    document.getElementById("correctAnswer").innerHTML = "\n \n" + "Correct Answer: " + correctAnswer2;
    document.getElementById('button').onclick = function() {
        alert("button was clicked");
    };


function three(){ 
    document.getElementById("nextPageBtn").style.visibility = "visible"; 
    document.getElementById("answerText").innerHTML = "\n \n" + comment3;
    document.getElementById("correctAnswer").innerHTML = "\n \n" + "Correct Answer: " + correctAnswer3;
    };
    
   


function four(){ 
    document.getElementById("nextPageBtn").style.visibility = "visible"; 
    document.getElementById("answerText").innerHTML = "\n \n" + comment4;
    document.getElementById("correctAnswer").innerHTML = "\n \n" + "Correct Answer: " + correctAnswer4;

    };


function five(){ 
    document.getElementById("nextPageBtn").style.visibility = "visible"; 
    document.getElementById("answerText").innerHTML = "\n \n" + comment5;
    document.getElementById("correctAnswer").innerHTML = "\n \n" + "Correct Answer: " + correctAnswer5;
   
    };


function six(){ 
    document.getElementById("nextPageBtn").style.visibility = "visible"; 
    document.getElementById("answerText").innerHTML = "\n \n" + comment6;
    document.getElementById("correctAnswer").innerHTML = "\n \n" + "Correct Answer: " + correctAnswer6;
    
    };


function seven(){ 
    document.getElementById("answerText").innerHTML = "\n \n" + comment7;
    document.getElementById("correctAnswer").innerHTML = "\n \n" + "Correct Answer: " + correctAnswer7;
    
    };



 


function investmentCalculator(){ 

    let initialPrincipal = document.getElementById("inputPrincipal").value;

    let additionalYearlyContribution = document.getElementById("inputContributions").value; 
    let yearsInvestedString = document.getElementById("inputYears").value; 
    let expectedRateOfReturn = document.getElementById("inputRate").value;
 
    let yearsInvested = parseInt(yearsInvestedString);

    let yearsInvestedPlusOne = yearsInvested + 1;

    let expectedRateOfReturnAsDecimal = expectedRateOfReturn / 100;

    let totalYearlyRate = expectedRateOfReturnAsDecimal + 1;
    
    let simpleCalculatorTotalValue = initialPrincipal * Math.pow(totalYearlyRate, yearsInvested);   


    let additionalContributionTotalValue = 
    ((Math.pow(totalYearlyRate, yearsInvestedPlusOne) - totalYearlyRate)/ expectedRateOfReturnAsDecimal) * additionalYearlyContribution;

    let totalInvestmentValue = 0 + Math.round ((simpleCalculatorTotalValue + additionalContributionTotalValue)*100)/100;

    let print = document.getElementById("printTotal"); 
    print.innerHTML = "Congrats! You would have saved $" + totalInvestmentValue + "!"; 



}
 





