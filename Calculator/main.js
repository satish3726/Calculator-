var tbcal="";
const useinp = document.getElementById("useinp");
const compout = document.getElementById("compout");
function calcad(value){
    tbcal+=value;
    console.log(tbcal);
    useinp.value=tbcal;
 }
 function removech(){
      tbcal = tbcal.substring(0, tbcal.length-1);
      useinp.value = tbcal;
 }

 function execm(){
     if(tbcal.length == 0 || tbcal == ""){
         alert("Needs a input");
         return;
     }
    try{
        ans = eval(tbcal);
        compinp.value = ans;
    }
    catch(err){
        alert("Invalid input");
    }
 }
 function reset(){
     useinp.value = "";
     compinp.value="";
     tbcal = "";
 }