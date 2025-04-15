const valuebox= document.getElementById("valuebox");
const tocelcius=document.getElementById("FTOC");
const tofaren=document.getElementById("CTOF");
const result=document.getElementById("result");
let temp;

function convert(){

    if(tocelcius.checked){
      temp= Number(valuebox.value);
      temp=(temp-32)*5/9;
      result.textContent=temp +"°C"

    }
    else if(tofaren.checked){
        temp= Number(valuebox.value);
        temp= temp*9/5 +32;
        result.textContent=temp +"°F"

    }
    else{
        result.textContent="Select a unit";
    }
}