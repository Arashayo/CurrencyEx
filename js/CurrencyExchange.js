var fValPLN = document.querySelector(".converted-valuePLN");
var fValANY = document.querySelector(".converted-valueANY");

var elPLN = document.getElementById("convert");
var elANY = document.getElementById("convert2");

elPLN.addEventListener("click", checkPLN);
elANY.addEventListener("click", checkANY);



function checkPLN(){
fValPLN.innerHTML = '';
const amount = getPLN();

for (var i = 0; i<=9; i++)
{
var final = (amount / getPLNR(i)).toFixed(2);
fValPLN.innerHTML +="<br> "+ final+" "+getPLNID(i);

}

// var final = (amount / exchangeR ).toFixed(2);

// fValPLN.innerHTML = final+" "+buy.value;
}

function checkANY(){
    var buy = document.getElementById("buy2");
    var buyR = parseFloat(document.getElementById(buy.value).textContent);
    var sell = document.getElementById("sell");
    var sellR = parseFloat(document.getElementById(sell.value).textContent);
    const amount = getANY();

    var final = ((buyR/sellR)*amount).toFixed(2);

    fValANY.innerHTML = final+ " " +buy.value;

}

function getPLN()
{
    return document.querySelector('#amountinput').value;
}
function getPLNR(_x)
{
    return document.querySelector('.curr'+ _x).textContent;
}
function getPLNID(_x)
{
    return document.querySelector('.curr'+ _x).id;
}
function getANY()
{
    return document.querySelector('#amountinput2').value;
}
