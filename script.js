function getTip(button) {
    let billPrice = document.getElementById("bill").value;
    let numberOfPeople = document.getElementById("numppl").value;
    let amount = document.getElementById("tipamount");
    let total = document.getElementById("total");
    let tip = button.value;

    if (numberOfPeople.length==0) {
        document.getElementById("numppl").style.borderColor = "red";
        document.getElementById("error").innerHTML = "Can't be Zero";
    }else{
        let tipAmount = (billPrice * tip)/100;
        let totalPerson = tipAmount * numberOfPeople;
    
        amount.innerHTML = "$"+Math.round(tipAmount * 100) / 100;
        total.innerHTML = "$"+Math.round(totalPerson * 100) / 100;
    }

    

}

function reset(){

    let amount = document.getElementById("tipamount");
    let total = document.getElementById("total");

    
    document.getElementById("bill").value = "0";
    document.getElementById("numppl").value = "0";
    document.getElementById("numppl").style.border = "none";
    document.getElementById("error").innerHTML = "";
    amount.innerHTML = "00";
    total.innerHTML = "00";
}

