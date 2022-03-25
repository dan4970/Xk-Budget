let vacationCalc=document.getElementById("vacationCalc")

vacationCalc.addEventListener("submit", calcExpenses)

function getValues()
{   
let destiny=document.getElementById("destiny").value;
let budget=document.getElementById("budget").value;
let acomodation=document.getElementById("acomodation").value;
let transport=document.getElementById("transport").value;
let food=document.getElementById("food").value;
return{destiny,budget,acomodation,transport,food}
}
function calcExpenses(e){
    e.preventDefault();  //para que no se recargue automaticamente la pagina
    
    const {destiny, budget, acomodation, transport, food} = getValues();


    // calcular los gastos totales 
    //se coloca parceInt() para decirle q todo lo que entre ahi sea un numero
    let expenses=parseInt(acomodation) + parseInt(transport) + parseInt(food);
    // vamos a crea una variable con los balances  
    // vamos a restar el presupuesto con las expenses
    let balance= budget-expenses;
    
    UI(destiny, budget, balance)
} 

function UI(destiny, budget, balance){
let result=document.getElementById("result")
let dataPrint=document.createElement("div")

dataPrint.innerHTML= `
    <div class="container-data row">
        <div class="col s4">
            <h6>${destiny}</h6>
        </div>
        <div class="col s4">
            <h6>${budget}</h6>
        </div>
        <div class="col s4">
            <h6>${balance}</h6>
        </div>
    </div>    
    `

    result.appendChild(dataPrint)   //agregar al elemento padre result los elemento hijos creados que son dataPrint

    reset();   //resetear eliminar los datos escritos en los inputs
}

function reset(){
    document.getElementById("vacationCalc").reset();
}