window.addEventListener("DOMContentLoaded", (e) => {
  const b = document.getElementById("btn-count");
  b.addEventListener("click", countPrice);
});

function countPrice(e) {
  e.preventDefault();
  const price = document.getElementById("price");
  const count = document.getElementById("num");
  const total = document.getElementById("total");
  let result = price.value * count.value;
  if (!isNaN(Number(price.value)) && !isNaN(Number(count.value))) {
    total.value = result;
  } else {
    alert("Допущена ошибка при вводе данных!");
  }
}
