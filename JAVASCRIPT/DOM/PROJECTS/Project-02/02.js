const form = document.querySelector('form')

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight';
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        let status = ''
        if (BMI <= 18.6) {
            status = 'you are under weight'
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            status = `you are in normal range`
        } else {
            status = `you are overweight`
        }
        results.innerHTML = `<h3>${BMI}</h3><p>${status}</p>`
    }
    
})

