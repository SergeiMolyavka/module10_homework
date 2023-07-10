const iconButton = document.querySelector('.j-btn-test');
const icon1 = "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.904-2.854a.5.5 0 1 1 .707.708L6.707 9.95h2.768a.5.5 0 1 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.475a.5.5 0 1 1 1 0v2.768l4.096-4.097z";
const icon2 = "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z";

let isIcon1 = true;

iconButton.addEventListener("click", () => {
  iconButton.classList.toggle('btn--magic');
  const svgIcon = iconButton.querySelector("svg path");
  
  if (isIcon1) {
    svgIcon.setAttribute("d", icon2);
  } else {
    svgIcon.setAttribute("d", icon1);
  }
  
  isIcon1 = !isIcon1;
});
