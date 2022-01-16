function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = parseInt(document.getElementById("years").value);

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + y;

    var cal = p * r/100 * y;

    if (parseInt(p) < 1 || p == "") {
        alert("Please enter a positive number");
    }
    else {
        document.getElementById("result").innerHTML = `If you deposit ${p}, 
                                                    \nat an interest rate of ${r}%.\n
                                                    You will receive an amount of ${cal},\n
                                                    in the year ${yearNow}`;
    }

   
}
        
function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_val");

    // 50%
    output.innerHTML = slider.value; 

    // Update value
    slider.oninput = function() 
    {
        output.innerHTML = this.value;
    }  
}