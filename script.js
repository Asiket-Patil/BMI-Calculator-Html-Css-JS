const form = document.querySelector(".form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    const height =parseInt(document.querySelector("#height").value);
    console.log(height);
    const weight = parseInt(document.querySelector("#weight").value);
    console.log(weight);

    const result = document.querySelector(".result");

    if(weight === "" || weight<0 || isNaN(weight)){
        result.innerHTML = `${weight} is not valid weight`;
    }
    else  if(height === "" || height <0 || isNaN(height)){
        result.innerHTML = `${height} is not valid Height`;
    }
    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`Your BMI is ${BMI} kg/m2 `;
    }
})