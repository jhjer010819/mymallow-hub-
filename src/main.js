document.documentElement.classList.add("js-ready");

const cards = document.querySelectorAll(".service-card.is-live");
cards.forEach((card) => {
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      card.click();
    }
  });
});
