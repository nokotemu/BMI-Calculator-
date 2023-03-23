var age = document.getElementById("Age");
var height = document.getElementById("Height");
var weight = document.getElementById("Weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modaltext");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function calculate(){

    if(age.value==''|| height.value=='' || weight.value=='' || (maale.checked==false && female.checked==false)){
        modal.style.display = "block";
        modalText.innerHTML = `All fields are required`;
    
    }else{
    countBmi();
    }
}

function countBmi(){
    var p = [age.value, height.value, weight.value];
    if(male.checked){
        p.push("male");
    }else if(female.checked){
        p.push("female");
    }

    
    var bmi = Number (p[2])/(Number(p[1]))/100*Number(p[1]/100);

    var result = '';
    if (bmi<18.5){
        result = 'Underweight';
    }else if(18.5<=bmi&&bmi<=24.9){
        result = 'Healthy';
    }else if (25<=bmi&&bmi<=29.9){
        result = 'Overweight';
    }else if (30<=bmi&&bmi<=34.9){
        result = 'Obese' ;
    }else if (35<=bmi){
        result = 'Morbidly Obese';
    }

    resultArea.style.display = "block";
    document.querySelector(".comment").InnerHTML = You are <span id= "Comment"> $[result] </span>
    document.querySelector("#Result").InnerHTML = bmi.toFixed(2);

}

    // When the user clicks one <span> (x), close the modal
    span.onclick = function (){
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onlick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    