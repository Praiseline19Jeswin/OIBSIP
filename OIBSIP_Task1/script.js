
function show(data){
    document.getElementById("display").innerHTML+=data;
}
function clear1(){
    document.getElementById("display").innerHTML="";
}
function calculate(){
    try{
        var x=document.getElementById("display").innerHTML;
        if(x.includes("sin")){
            x=x.split('(');
            x=x[1].split(')');
            x=x[0];
            document.getElementById("display").innerHTML=Math.sin(x);
        }
        if(x.includes("cos")){
            x=x.split('(');
            x=x[1].split(')');
            x=x[0];
            document.getElementById("display").innerHTML=Math.cos(x);
        }
        if(x.includes("tan")){
            x=x.split('(');
            x=x[1].split(')');
            x=x[0];
            document.getElementById("display").innerHTML=Math.tan(x);
        }
        document.getElementById("display").innerHTML=eval(document.getElementById("display").innerHTML);
    }
    catch(error){
        document.getElementById("display").innerHTML="SYNTAX ERROR";
    }
    
}

function last1(){
    var x=document.getElementById("display").innerHTML;
    x=x.slice(0,-1);
    document.getElementById("display").innerHTML=x;
}