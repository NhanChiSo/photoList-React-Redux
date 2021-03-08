export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
};

export const removeActive = (selector) => {
  var selectors = document.querySelectorAll(selector);
  for (let i = 0; i < selectors.length; i++) {
    selectors[i].classList.remove("active");
  }
};
