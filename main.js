
window.onload = () => {
    // alert("Hello");
    calculate();
}
function calculate(){
    let age = parseInt(document.getElementById("age").value);
    // let gender = document.getElementsByName("user-gender");
    let height = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);

    console.log(age, height, weight);
    if (age <= 1 && age > 122) {
        alert("Please enter age between 2 to 120");
    }else if(age === NaN){
        alert("ENter only numbers between 2 to 120")
    }else{
        alert(age)
    }


    // function calculateBMI() {
    //     let BMI = weight.value / (height.value * height.value);
    //     alert("BMI is : " + BMI);
    // }
    // function clearScreen() {

    // }
}
