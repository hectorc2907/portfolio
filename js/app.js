function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

const link1 = document.getElementById("project");
const link2 = document.getElementById("skills");
const link3 = document.getElementById("contact");

link1.addEventListener("click", () => {
  scrollToElement(".header");
});
link2.addEventListener("click", () => {
  scrollToElement(".header", 1);
});
link3.addEventListener("click", () => {
  scrollToElement(".header", 2);
});
