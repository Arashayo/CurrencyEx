// function{
//     for(var i = 0;i<=9;i++)
//     {
//         var doc = document.querySelector('#diff'+i).textContent
//         if (doc.indexOf('-') > -1)
//         {
//             document.getElementById('diff'+i).style.color = "red";
//         }
//         else
//         {
//             document.getElementById('diff'+i).style.color = "green";
//         }
//     }
//    }, 1000);

   function Swap(){
    for(var i = 0;i<=9;i++)
    {
        var doc = document.querySelector('#diff'+i).textContent
        if (doc.indexOf('-') > -1)
        {
            document.getElementById('diff'+i).style.color = "red";
        }
        else
        {
            document.getElementById('diff'+i).style.color = "green";
        }
    }
   }





function getToSwap()
{
    console.log(document.querySelector('#diff1').textContent);
}

