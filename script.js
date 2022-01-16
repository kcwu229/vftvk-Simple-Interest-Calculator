function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);

    var cal = p * r/100 * y;

    document.getElementById("result").innerHTML = `If ypu deposit ${p}, 
                                                    \nat an interest rate of ${r}%.\n
                                                    You will receive an amount of ${cal},\n
                                                    in the year ${year + parseInt(y)}`;
   
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