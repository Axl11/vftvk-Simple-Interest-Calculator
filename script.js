//compute() function processes all data that user types and send the interest according to the values.
function compute()
{ 
    //Get the reference to the element named "principal" inside the principal variable
    var principal = document.getElementById("principal").value;
    //Get the reference to the element named "rate" inside the rate variable
    var rate = document.getElementById("rate").value;
    //Get the reference to the element named "years" inside the years variable
    var years = document.getElementById("years").value;
    //Store the logic operation of the interest inside the interest variable
    var interest = principal * years * rate /100;
    //Store the actual year plus the years assigned by user
    var year = new Date().getFullYear()+parseInt(years);
    
    if(principal <= 0) {
        //checkdata() function is called to execute what it contains
        checkdata();
    }
    else {
        //Sets the HTML content of the element named "result"
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>\<br\>"
    }
}

//updateRaye() function update the rate value according to the slider
function updateRate()
{
    //Get the reference to the element named "rate" inside the rateval variable
    var rateval = document.getElementById("rate").value;
    //Sets the HTML content of the element named "rate_val"
    document.getElementById("rate_val").innerHTML=rateval+"%";
}

//checkdata() function validate the principal input field
function checkdata(){
    //create references to the input elements we wish to validate
    var principal = document.getElementById("principal");

    //Check if principal field is zero or negative numbers
    if(principal.value <= 0){
        alert("Please enter a positive number");
        principal.focus();
        return false;
    }
}


        