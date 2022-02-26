const adviceTitle = document.querySelector(
  ".section-card__advice-title"
);
const adviceQuote = document.querySelector(
  ".section-card__advice-quote"
);
const rollButton = document.querySelector(
  ".section-card__dice-button"
);

const urlApi = "https://api.adviceslip.com/advice";

const getQuote = () => {
  fetch(urlApi)
    .then((res) => res.json())
    .then((json) => {
      adviceTitle.innerHTML = `Advice #${json.slip.id}`;
      adviceQuote.textContent = `"${json.slip.advice}"`;
    })
    .catch((err) => console.log(err));
};

getQuote();
rollButton.addEventListener("click", getQuote);
