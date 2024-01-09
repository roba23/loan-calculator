document.getElementById('calculatebtn').addEventListener('click',calculation);


function calculation(){
    const loanamt = parseFloat(document.getElementById('loanAmountInput').value);
    const loanterm = parseInt(document.getElementById('loanTermInput').value);
    const rate = parseFloat(document.getElementById('interestRateInput').value);


    if (isNaN(loanamt) || isNaN(loanterm) || isNaN(rate))
    {
        alert("please enter all the fields correctly");
    }
    else{
        const monthlyInterest = rate / 100 / 12;
        const monthlyPayment = (loanamt * monthlyInterest) / (1-Math.pow(1 + monthlyInterest, -loanterm));
        const totalInterest = (monthlyPayment * loanterm) - loanamt;
         
        displayResult(monthlyPayment, totalInterest);
    }
    function displayResult(monthlyPayment, totalInterest){

        const result = document.getElementById('result');

        result.innerHTML = ` 
        <p><strong>Monthly Interest: ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total  Interest: ${totalInterest.toFixed(2)}</strong></p>

        
        
        `;

        

    }

}