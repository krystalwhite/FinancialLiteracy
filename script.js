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

function answer1(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
}; 

function answer2correct(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = correct + "\n \n" + comment2; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = "Correct Answer: " + correctAnswer2 + "\n \n"; 
}; 

function answer2wrong(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = wrong + "\n \n" + comment2; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer2 + "\n \n"; 
}; 

function answer3correct(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = correct + "\n \n" + comment3; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = "Correct Answer: " + correctAnswer3 + "\n \n"; 
}; 

function answer3wrong(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = wrong + "\n \n" + comment3; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer3 + "\n \n"; 
}; 

function answer4correct(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = correct + "\n \n" + comment4; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer4 + "\n \n"; 
}; 

function answer4wrong(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = wrong + "\n \n" + comment4; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer4 + "\n \n"; 
}; 

function answer5correct(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = correct + "\n \n" + comment5; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer5 + "\n \n"; 
}; 

function answer5wrong(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = wrong + "\n \n" + comment5; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer5 + "\n \n"; 
}; 

function answer6correct(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = correct + "\n \n" + comment6; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer6 + "\n \n"; 
}; 

function answer6wrong(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = wrong + "\n \n" + comment6; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " +  correctAnswer6 + "\n \n"; 
}; 

function answer7correct(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = correct + "\n \n" + comment7; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer7 + "\n \n"; 
}; 

function answer7wrong(){ 
document.getElementById("nextPageBtn").style.visibility = "visible"; 
document.getElementById("answerText").innerHTML = wrong + "\n \n" + comment7; 
document.getElementById("correctAnswer").style.visibility = "visible"; 
document.getElementById("correctAnswer").innerHTML = "Correct Answer: " + correctAnswer7 + "\n \n"; 
}; 



//stock calculator 
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

    let totalInvestmentValue = Math.round ((simpleCalculatorTotalValue + additionalContributionTotalValue)*100)/100;

    let print = document.getElementById("printTotal"); 
    print.innerHTML = "Congrats! Over " + yearsInvested + " years, you would have saved $" + totalInvestmentValue + "!"; 


}
 



// function investmentCalculator () {

//   let initialPrincipal = parseFloat(initialPrincipalInput.value); 
//   let yearsInvested = parseFloat(yearsInvestedInput.value); 
//   let additionalYearlyContribution = parseFloat(additionalYearlyContributionInput.value); 
//   let expectedRateOfReturn = parseFloat(expectedRateOfReturnInput.value); 

//   alert("test"); 
// // alert(initialPrincipalInput.value); 

  
//     let expectedRateOfReturnAsDecimal = expectedRateOfReturn / 100;
//     let totalYearlyRate = expectedRateOfReturnAsDecimal + 1;
//     let yearsInvestedPlusOne = yearsInvested + 1;
//     let totalInvestmentValue = 
//     (initialPrincipal * ((1 + expectedRateOfReturnAsDecimal)**yearsInvested)) +     
//     (additionalYearlyContribution *  ((totalYearlyRate**yearsInvestedPlusOne - totalYearlyRate) / expectedRateOfReturnAsDecimal)
//         ) ;


// document.getElementById("investedTotal").innerHTML = totalInvestmentValue; 


    
//     console.log(totalInvestmentValue);
// }








//this is WORKING CODE!! 


// function investmentCalculator (initialPrincipal, yearsInvested, additionalYearlyContribution, expectedRateOfReturn) {
//     let expectedRateOfReturnAsDecimal = expectedRateOfReturn / 100;
//     let totalYearlyRate = expectedRateOfReturnAsDecimal + 1;
//     let yearsInvestedPlusOne = yearsInvested + 1;
//     let totalInvestmentValue = 
//     (initialPrincipal * ((1 + expectedRateOfReturnAsDecimal)**yearsInvested)) +     
//     (additionalYearlyContribution * 
//         ((totalYearlyRate**yearsInvestedPlusOne - totalYearlyRate) / expectedRateOfReturnAsDecimal)
//         ) ;










// function invest(moneyInvested, yearsInvested){ 
//   let investedTotalParagraph = document.getElementById("investedTotal"); 

//   let moneyPerYear = moneyInvested * 12; 
//   let totalInvestedMoney = moneyPerYear * yearsInvested; 
//   let investedTotal = totalInvestedMoney * .08; 

//   investedTotalParagraph.innerHTML = moneyInvested; 

//   document.getElementById("investedTotal").style.visibility = "visible"; 
  

// }

