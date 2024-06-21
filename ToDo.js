
let text=document.querySelector(".text");
let inputs=document.getElementById("inp");
function Add(){
    if(inputs.value==""){
        alert("Please Enter Task");
    }else{
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        newEle.querySelector('i').addEventListener('click', function() {
            newEle.remove();
        });
        text.appendChild(newEle);
        inputs.value="";
        inputs.focus();
    }
}