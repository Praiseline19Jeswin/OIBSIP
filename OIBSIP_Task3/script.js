var i=0;
function addtasks(){
    var x=document.getElementById("title").value;
    var y=document.getElementById("desc").value;
    var cb = document.createElement("INPUT");
    cb.setAttribute("type", "checkbox");
    i++;
    var date = new Date();
    var l=String(date);
    l=l.split("G");
    var t=l[0];
    var z="<div style='height:auto;width:auto;font-size:15px;background-color:skyblue; border-radius:10px; border:1px blue solid; margin:2px; padding:10px;' id=mydiv"+i+">"+x+"</br>"+"<button onclick='del(event)' style='background-color:red; color:white; height:40px; width:40px; float:right; border-radius:10px; border:none;' id=b"+i+"><i class='fa fa-trash-o'></i></button>"+y+"</br>"+"Created:"+t+"</br>"+"Completed:"+"</div>";
    document.getElementById("tasks").innerHTML+=z;
    cb.setAttribute("id","check"+i);
    document.getElementById("mydiv"+i).appendChild(cb);
    document.getElementById("title").value="";
    document.getElementById("desc").value="";
}

document.getElementsByTagName("div")[0].addEventListener("click", function(){
    var ele = document.getElementsByTagName("input");
    for(var i=0;i<ele.length;i++){
        if(ele[i].type == "checkbox"){
            var j=ele[i].id;
            if(document.getElementById(j).checked==1){
                var box=document.getElementById(j);
                var d=document.getElementById(j).parentNode;
                var id=d.id;
                console.log(id);
                document.getElementById("tasks").appendChild(d);
                box.parentNode.removeChild(box);
                d.innerHTML+="<p style='color:green;'> Successfully completed!</p>";
                document.getElementById(id).style.backgroundColor="#98FB98";
                document.getElementById(id).style.border="none";
                
            }
        }
    }
});

function del(event){
    var j= event.currentTarget.id;
    var k= document.getElementById(j).parentNode;
    k.remove();
}

