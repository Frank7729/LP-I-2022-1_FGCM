function par_impar(){
    num1=document.getElementById("n1").value;
    console.log(num1);
    if(num1.length>0 && !isNaN(num1)){
        if(num1%2==0){
            document.getElementById("rs").innerHTML="Es Par";
        }else{
            document.getElementById("rs").innerHTML="Es Impar";
        }
    }else{
        alert("Ingrese un numero");
        document.getElementById("rs").innerHTML=id;
        document.getElementById("n1").focus();
    }
}
function area_circulo(){
    num2=document.getElementById("n2").value;
    console.log(num2);
    const pi = 3.14;
	var a,num2;
	a = pi*num2*num2;
    document.getElementById("rsta").innerHTML="El área es = "+a;
}
function ecuacion_2dogrado(){
    num3=document.getElementById("n3").value;
    console.log(num3);
	var a,num3;
	a = (num3*num3+num3+1);
    document.getElementById("rstas").innerHTML="La ecuacion de segundo grado es = "+a;
}