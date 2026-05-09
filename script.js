const points = document.querySelectorAll(".point");

for (const point of points) {
  point.setAttribute("tabindex", "0");
  point.addEventListener("mouseenter", () => point.classList.add("active"));
  point.addEventListener("mouseleave", () => point.classList.remove("active"));
  point.addEventListener("focus", () => point.classList.add("active"));
  point.addEventListener("blur", () => point.classList.remove("active"));
}
