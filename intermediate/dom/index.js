// var body = document.body;
// var firstChild = body.firstElementChild;
// var h1 = firstChild.firstElementChild;
// h1.innerHTML = "KuliTech Ventures";

var body = document.body;
var firstChild = body.firstElementChild;
var h1 = firstChild.firstElementChild;
h1.innerHTML = "KuliTech Ventures";

var  kuliTech = document.body.getElementsByTagName("h1");
// KuliTech[0].innerText = "KuliTech Business";
console.log(kuliTech);


var kuliBusiness = document.getElementById("company_name");
 kuliBusiness.innerHTML = "KuliTech Enterprise";



 let grocery = "";
 let price = 0;

function addGroceries(table, grocery, price){
    let groceryRow = document.createElement("tr");


    let groceryData = document.createElement("td");
    let priceData = document.createElement("td");

    groceryData.innerText = grocery;
    priceData.innerText = price;

    groceryRow.appendChild(groceryData);
    groceryRow.appendChild(priceData);

    table.childNodes[1].appendChild(groceryRow);

}



let priceTable = document.getElementById("priceTable");
let form = document.getElementsByTagName("input");

function add() {
    event.preventDefault();
    grocery = form[0].value;
    price = form[1].value;
    addGroceries(priceTable, grocery, price);
    clearInput();
}

function clearInput() {
    form[0].value = "";
    form[1].value = "";
}

// addGroceries(priceTable, "Mango", 300);



// let form = document.getElementsByTagName("input");
// console.log(form):