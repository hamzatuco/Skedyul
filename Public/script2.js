const btn = document.querySelector("#btn")


function getInputValue(e) { 
     e.preventDefault()
     let input1 = document.getElementById("input1");
     let input2 = document.getElementById("input2");
     let input3 = document.getElementById("input3");
     console.log("Naziv: " + input1.value)
     console.log("Adresa: " + input2.value)
     console.log("Grad: " + input3.value)
     input1.value = ""
     input2.value = ""
     input3.value = ""
   }
btn.addEventListener("click",getInputValue)