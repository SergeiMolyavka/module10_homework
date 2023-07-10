const sizeBtn = document.getElementById("sizeBtn");

sizeBtn.addEventListener("click", function() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  alert(`Размер экрана: ${screenWidth} x ${screenHeight}`);
});