let bill= document.querySelector(".amount");
let select = document.querySelector("#select");
let numberOfpersons = document.querySelector(".numberOfpersons");
let btn = document.querySelector(".btn");
let total = document.querySelector(".total")

btn.addEventListener("click",function(){
    const billValue = Number(bill.value);
    const selectValue= Number(select.value);
    const  num=Number(numberOfpersons.value);
    let res= (billValue*selectValue)/num;
    console.log(res);
    total.value = res
    })

