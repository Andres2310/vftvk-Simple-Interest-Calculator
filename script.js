function compute()
{
    let p = document.getElementById("principal").value;
    let rate=document.getElementById("rate").value;
    let years=document.getElementById("years").value;
    const date = new Date();
    let finalDate=parseInt(years)+date.getFullYear();
    let amount=p*(rate/100)*parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+p+",<br>at an interest rate of "+rate+"%.<br>You will receive an amount of "+amount.toFixed(2)+",<br>in the year "+finalDate;


    return false;
}
        