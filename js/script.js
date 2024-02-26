const toggleTheme = document.querySelector(".toggle-theme");
const lightIcon = document.querySelector(".light-mode-icon");
const darkIcon = document.querySelector(".dark-mode-icon");
const body = document.body;
const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".drawer");

lightIcon.addEventListener("click", () => {
  body.style.backgroundColor = "white";
});

darkIcon.addEventListener("click", () => {
  body.style.backgroundColor = "black";
  body.style.color = "white";
});



// toggleTheme.addEventListener("click", () => {
//     if(headerContainer.classList.contains('light-mode-icon')){
//         lightIcon.remove();
//         body.style.backgroundColor = "black";

//     } else{
//         darkIcon.remove()
//     }
// })



// toggleTheme.addEventListener("click", () => {
//     if (headerContainer.classList.contains('light-mode-icon')) {
//       lightIcon.remove();
//       body.style.backgroundColor = "white";
//       headerContainer.insertAdjacentHTML('beforeend', '<img class="dark-mode-icon" src="./images/Moon_fill.svg" alt="Dark mode icon">');
//     } else {
//       darkIcon.remove();
//       body.style.backgroundColor = "black";
//       headerContainer.insertAdjacentHTML('beforeend', '<img class="light-mode-icon" src="./images/Sun_fill.svg" alt="Light mode icon">');
//     }
//   });