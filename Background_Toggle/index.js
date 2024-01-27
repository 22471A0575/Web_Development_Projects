function color(){
    let checkbox=document.querySelector("#check")
    if(checkbox.checked){
       document.body.style.backgroundColor='black';
    }
    else{
        document.body.style.backgroundColor='white';
    }
}