const calculateButton=document.querySelector("form button");
const inchInput = document.querySelector("form input");    
calculateButton.addEventListener("click",function(e){
     e.preventDefault();
   if(inchInput.value==""){
    Error("* input is required");
}
else if(isNaN(inchInput.value)){
    Error("* plz enter a number");
}
else {
    document.querySelector(".result").style.display="block";
    document.querySelector(".error-message").style.display="none"
    document.querySelector(".result").innerHTML=( (inchInput.value * 0.0254).toFixed(3)) + " Meters";
}
})
function Error(message) {
    document.querySelector(".error-message").innerHTML=""
    document.querySelector(".error-message").innerHTML=message
    document.querySelector(".result").style.display="none";
    document.querySelector(".error-message").style.display="block"
  }