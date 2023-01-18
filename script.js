function tipLow() {
  const tipAmtLow = document.getElementById("tipLow").innerHTML; //button
  const total = document.getElementById("total").value; //input
  let newAmt = document.getElementById("newAmt"); 
  newAmt.innerHTML = 'Total: $' + (parseInt(total) + parseInt(total) * .15);
  if (newAmt.innerHTML === 'Total: $NaN') {
    newAmt.style.color = "red";
    newAmt.innerHTML = "Please enter a valid number";
  }
}

function tipMed() {
  const tipAmtMed = document.getElementById("tipMed").innerHTML;
  const total = document.getElementById("total").value;
  let newAmt = document.getElementById("newAmt");
  newAmt.innerHTML = 'Total: ' + (parseInt(total) + parseInt(total) * .18);
}

function tipHigh() {
  consttipAmtHigh = document.getElementById("tipHigh").innerHTML;
  const total = document.getElementById("total").value;
  let newAmt = document.getElementById("newAmt");
  newAmt.innerHTML = 'Total: ' + (parseInt(total) + parseInt(total) * .25); 
}
