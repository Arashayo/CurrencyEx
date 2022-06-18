var idk = new Date();
ThreeDays(idk);

const DIFFERENCE = 'https://api.nbp.pl/api/exchangerates/tables/A/'+ getDateAPI(idk) +'/?format=json';


$(document).ready(function(){
    const ACTUAL = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';

    var now = new Array();
    var then = new Array();
    var temp = 0;




    $("#date").html("Kursy walut, notowanie z dnia "+ getDateAPI(idk));

    $.ajax({
        url:ACTUAL,
        type:"GET",
        success:function(result)
        {
            $.each(result ,function(index,value){
                $.each(value.rates, function(index2, value2){
                    if(index2<=9){
                        $("#currency").append("<tr><td><center>" + value2.code + "</center></td><td class='curr"+index2+"'value='"+value2.mid+"' id="+value2.code+">" + value2.mid + "</td></tr>");
                        $("#buy").append("<option value='"+value2.code+"'>"+value2.code+"</option>");
                        $("#buy2").append("<option value='"+value2.code+"'>"+value2.code+"</option>");
                        $("#sell").append("<option value='"+value2.code+"'>"+value2.code+"</option>");
                        $("#currChart").append("<option value='"+value2.code+"'>"+value2.code+"</option>");
                        now.push(value2.mid);
                    }
                })
                })
      
        }
    })
    
    
    $.ajax({
        
        url:DIFFERENCE,
        type:"GET",
        success:function(result) {
            $.each(result ,function(index,value){
                $.each(value.rates, function(index2, value2){
                    if(index2<=9){
                        then.push(value2.mid);
                        
                        temp = (((now[index2]-then[index2])/then[index2])*100).toFixed(2);
                        $(".curr" + index2).after("<td id='diff"+index2+"'>" +temp+ "%" +"</td>");
                    }
                })
            })
            Swap();
      
        }
    })

    console.log(then);
})


function getDateAPI(z)
{

    return z.getFullYear() + '-'
    + ('0' + (z.getMonth()+1)).slice(-2) + '-'
    + ('0' + z.getDate()).slice(-2);
}

function ThreeDays(x)
{
    x.setDate(x.getDate()-3);
}