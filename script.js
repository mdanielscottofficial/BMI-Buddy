let Button = document.getElementById("calculebtn");
Button.addEventListener("click", calculeBmi);

function calculeBmi() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let imcData = document.getElementById("imcData");
    if (weight > 300 || height > 200) {
        imcData.textContent = "Weight Is less Then 300 And Height is less then 200, So Please add valid number";
          return;
    }
    // Calculate BMI
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    let imcText;
    if (bmi <= 18.5) {
        imcText = 'Underweight';
    } else if (bmi > 18.5 && bmi <= 25) {
        imcText = 'Normal Weight';
    } else if (bmi > 25 && bmi <= 30) {
        imcText = 'Overweight';
    } else if (bmi > 30 && bmi <= 35) {
        imcText = 'Level 1 obesity';
    } else if (bmi > 35 && bmi <= 40) {
        imcText = 'Level 2 obesity';
    } else if (bmi > 40 && bmi <= 50) {
        imcText = 'Level 3 obesity';
    } else if (bmi > 50) {
        imcText = 'Level 4 obesity';
    }

    // Display result
    imcData.textContent = `IMC: ${bmi} ${imcText}`;
}
