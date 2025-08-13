let amount = Number(prompt("enter your amount"));
if(amount >=500){
    console.log(Math.floor(amount/500));
    amount = amount % 500
}
if(amount >=200){
    console.log(Math.floor(amount/200));
    amount = amount % 200
}
if(amount >=100){
    console.log(Math.floor(amount/100));
    amount = amount % 100;
}
