console.log("bune churet");
const headerEl = document.querySelector(".header");
const logoEl = document.querySelector(".header__logo");
const headerLinksEl = document.querySelector(".header__links");
const bannerTextEl = document.querySelector(".banner__text");
const toggleBtn = document.querySelector(".header__toggle--btn");
const mobileMenu = document.querySelector(".header__mobile--menu");
const overlayEl = document.querySelector(".overlay");
const underlineEl = document.querySelector(".favorites__underline");

const tabContents = document.querySelectorAll(".favorites__tabs--content");
const tabButtons = document.querySelectorAll(".favorites__tabs--btn");

window.onload = function () {
  bannerTextEl.style.paddingLeft = logoEl.offsetLeft + "px";
};

//toggle button animation
// mobileMenu.style.right = -getComputedStyle(mobileMenu).width + "px";

toggleBtn.addEventListener("click", function () {
  if (headerEl.classList.contains("toggle")) {
    //closing mobile menu
    // mobileMenu.classList.add("hide");
    headerEl.classList.remove("toggle");
    toggleBtn.classList.remove("active");
    toggleBtn.classList.add("non-active");
    overlayEl.classList.add("hide");
  } else {
    //open mobile menu
    // mobileMenu.classList.remove("hide");
    headerEl.classList.add("toggle");
    toggleBtn.classList.remove("non-active");
    toggleBtn.classList.add("active");
    overlayEl.classList.remove("hide");

    // mobileMenu.style.right = "0px";
  }
});
console.log(getComputedStyle(mobileMenu).width);

console.log(tabContents);
console.log(tabButtons);

tabButtons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const clickedButton = e.target.closest(".favorites__tabs--btn");
    const buttonNumber = clickedButton.dataset.tabBtn;
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    console.log(buttonNumber);
    document
      .querySelector(`.tabs__content--${buttonNumber}`)
      .classList.add("active");
    //tab underline
    underlineEl.style.marginLeft = (buttonNumber - 1) * 20 + "%";
  })
);
