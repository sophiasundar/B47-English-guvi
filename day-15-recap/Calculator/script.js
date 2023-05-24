
//keyboard Events only for numbers
let cal = document.getElementsByClassName('btn1');

cal.addEventListener("keydown", function (event) {
    key(event);
});


//link numbers,operators with values
function insert(number){
    document.form.entervalue.value=document.form.entervalue.value+number;
    console.log(number);
}

//inorder to perform equalto
function equalto(){
    var cal=document.form.entervalue.value
    if(cal){
        document.form.entervalue.value=eval(cal)
    }else{                       //alert('Only Numbers are allowed')
        document.form.entervalue.value= alert('Only Numbers are allowed')
    }
}

//clear totally
function allclear(){
    document.form.entervalue.value='';
}

//clear one by one
function clearOne(){
    var cal=document.form.entervalue.value
    document.form.entervalue.value=cal.substring(0,cal.length-1)
}