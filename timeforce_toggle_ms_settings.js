
function getMsDigits() {
  return localStorage.getItem("msDigits") === "2" ? 2 : 3;
}

function setMsDigitsFromToggle(checked) {
  const val = checked ? "3" : "2";
  localStorage.setItem("msDigits", val);
  alert("Настройка обновлена: " + val + " знака миллисекунд");
}
