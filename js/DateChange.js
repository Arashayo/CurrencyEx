$("#currDate").on("change",function(){
    var selected = $(this).val();
    const DIFF = 'https://api.nbp.pl/api/exchangerates/tables/A/'+ selected +'/?format=json';


    var now = new Array();
    var then = new Array();
    var temp = 0;


    var newD= new Date(selected);
    swapDate(newD);
    ;

    const DIFFERENCE = 'https://api.nbp.pl/api/exchangerates/tables/A/'+ getDateAPI(newD) +'/?format=json';


    $("#date").html("Kursy walut, notowanie z dnia "+ selected);
    $("#currency").remove();
    $.ajax({
        url:DIFF,
        type:"GET",
        success:function(result)
        {
            
            $("thead").after("<tbody id='currency'></tbody>");
            $.each(result ,function(index,value){
                $.each(value.rates, function(index2, value2){
                    if(index2<=9){

                        now.push(value2.mid);

                        $("#currency").append("<tr><td><center>" + value2.code + "</center></td><td class='curr"+index2+"'value='"+value2.mid+"' id="+value2.code+">" + value2.mid + "</td> </tr>");
                    
                    }
                })
                })
        },
        error: function()
        {
            alert("Brak danych dotyczących danego dnia!");
        }

       
    })

    $.ajax({
        
        url:DIFFERENCE,
        type:"GET",
        success:function(result) {
            
            $.each(result ,function(index,value){
                $.each(value.rates, function(index2, value2){
                    if(index2<=9){
                        console.log(value2.mid)
                        then.push(value2.mid);
                        
                        temp = (((now[index2]-then[index2])/then[index2])*100).toFixed(2);
                        console.log(temp) 
                          temp+='%';
                        temp = temp == 'NaN%'? "Brak danych": temp
                     
                        $(".curr" + index2).after("<td id='diff"+index2+"'>" +temp+"</td>");
                    }

                })
            })
        
      
            Swap();
      
        },
        error: function()
        {
            alert("Nie można przeanalizować zamiany!");
            for(var i = 0; i<=9;i++)
            {
            $(".curr" + i).after("<td id='diff"+i+"'> Brak danych </td>");
        }
    }
    })
    
});



function swapDate(x)
{
    x.setDate(x.getDate()-6);
}