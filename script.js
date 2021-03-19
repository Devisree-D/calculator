
function dispbox(num){
    
    var res=document.querySelector(".p2")
res.value+=num
}
function print(){
    var res=document.querySelector(".p2").value;
    var out=eval(res)
    document.querySelector(".p2").value=out;
}
function del(){

    var res=document.querySelector(".p2").value;
    var data=res.slice(0,-1);
    document.querySelector(".p2").value=data;
}