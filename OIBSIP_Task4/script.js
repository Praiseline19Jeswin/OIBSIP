let d = localStorage.getItem('d') ?
JSON.parse(localStorage.getItem('d')) : {};
function check(){
    var user=document.getElementById("user").value;
    var p1=document.getElementById("p1").value;
    var p2=document.getElementById("p2").value;
    var errormsg=document.getElementById("error");
    var msg="";
    var m;
    try{
        if(p1.length<6){
            msg+="</br> Password must have atleast 6 characters";
        }
        if(/[A-Z]/g.test(p1)==false){
            msg+="</br> Password should have atleast one capital letter";
        }
        if(/\d/g.test(p1)==false){
            msg+="</br> Password should have atleast one digit";
        }
        if(p1!=p2){
            msg+="</br> Password does not match";
        }
        if(user in d){
            msg+="</br> Username already exists";
        }
        throw msg;
    }
    catch(err){
        errormsg.innerHTML=err;
    }
    if(msg.length<=1){
        d[user]= window.btoa(p1);
        localStorage.setItem('d', JSON.stringify(d));
        window.location.href = "login.html";
    }
}
function check2(){
    var user1=document.getElementById("user1").value;
    var p3=document.getElementById("p3").value;
    var errormsg=document.getElementById("error1");
    var msg1="";
    try{
        if (user1 in d === false ){
            msg1+="</br> Invalid Username";
        }
        else{
            if(d[user1] !== window.btoa(p3)){
                msg1+="</br> Invalid Password";
            }
        }
        throw msg1;
    }
    catch(err){
        errormsg.innerHTML=err;
    }
    if (msg1.length<=1){
        window.location.href = "main.html";
    }
}
