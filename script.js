function convert() {
  let num = document.getElementById("inputNumber").value;
  let type = document.getElementById("conversionType").value;
  let result = "";

  if (type === "binary") {
    result = parseInt(num).toString(2);
  } else if (type === "hex") {
    result = parseInt(num).toString(16).toUpperCase();
  } else if (type === "octal") {
    result = parseInt(num).toString(8);
  } else if (type === "decimal") {
    result = parseInt(num, 2); // assumes binary input
  }

  document.getElementById("result").innerText = "Result: " + result;
}
