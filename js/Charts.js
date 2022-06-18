$("#ActualDate").on("change",function(){
    var first = $(this).val();

    $("#EndDate").removeAttr("disabled").one("change", function()
    {

        var second = $(this).val();
        
        var tempD1 = new Date(first)
        var tempD2 = new Date(second)
        var tempD = 0;

        var x1 = new Array();
        var y1 = new Array();
        var chart;

        if (tempD1.getTime()<tempD2.getTime())
        {
            tempD = first;
            first = second;
            second = tempD;
        }
    
        const ACTUAL = 'http://api.nbp.pl/api/exchangerates/rates/A/'+ GetCurr() +"/"+second +"/"+ first +'/?format=json';

        $.ajax({
            url:ACTUAL,
            type:"GET",
            success:function(result)
            {
                console.log(result)
                $.each(result.rates ,function(index,value){
                    x1.push(value.effectiveDate)
                    y1.push(value.mid)
                    })

                    chart = {
                        x: x1,
                        y: y1,
                        type: 'scatter'
                    };
                    var layout = {
                        autosize: false,
                        width: 800,
                        height: 500,
                    };
            
                    var data = [chart];
                    Plotly.newPlot('chart', data, layout);
          
            },
            error: function()
            {
            first = 0;
            second = 0;
            alert("Zły zakres")
            }
        })
        console.log(x1, y1)
        
        $("#EndDate").attr("disabled", 1);
    })


});

function GetCurr()
{
    return document.querySelector('#currChart').value;
}

