const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight =parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if (height === '' ||  height<0 ||isNaN(height)){
        results.innerHTML= `enter a valid ${height}`;
    }
    else if (weight === '' || weight<0 || isNaN(weight) ){
        results.innerHTML = `plese enter the valid ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let bmiGuide = '';

        if (bmi < 18.6) {
            bmiGuide = 'Underweight Eat healthy bitch ';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            bmiGuide = 'Normal Range';
        } else {
            bmiGuide = 'Overweight you fat ass bitch go to the gym ';
        }

        results.innerHTML = `<span>Your BMI: ${bmi}</span><br>
                             <span>BMI Weight Guide: ${bmiGuide}</span>`;

    }
});