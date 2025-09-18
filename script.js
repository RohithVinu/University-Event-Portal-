// ---------------- BMI CALCULATOR ----------------
function calculateBMI() {
  let h = parseFloat(document.getElementById("height").value);
  let w = parseFloat(document.getElementById("weight").value);
  if (h > 0 && w > 0) {
    let bmi = (w / (h * h)).toFixed(2);
    document.getElementById("bmiResult").textContent = "Your BMI: " + bmi;
  } else {
    document.getElementById("bmiResult").textContent = "Enter valid values!";
  }
}

// ---------------- CURRENCY CONVERTER (jQuery) ----------------
$(document).ready(function () {
  $("#inr").on("keyup change", function () {
    let inr = parseFloat($(this).val());
    if (!isNaN(inr)) {
      let usd = (inr * 0.012).toFixed(2); // Example rate
      $("#usd").text(usd);
    } else {
      $("#usd").text("0");
    }
  });
});

// ---------------- FORM PROGRESS TRACKER ----------------
const form = document.getElementById("regForm");
const progress = document.getElementById("formProgress");
form.addEventListener("input", () => {
  let filled = 0;
  const inputs = form.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    if (
      (input.type === "checkbox" && input.checked) ||
      (input.type !== "checkbox" && input.value.trim() !== "")
    ) {
      filled++;
    }
  });
  progress.value = (filled / inputs.length) * 100;
});
