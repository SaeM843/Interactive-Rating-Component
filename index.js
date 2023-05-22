const ratings = document.querySelectorAll(".rating-circle");
const submit_btn = document.querySelector(".btn");
const selected_score = document.querySelector(".selected-score");
const rating_state = document.querySelector(".rating-state");
const thanks_state = document.querySelector(".thanks-state");

submit_btn.addEventListener("click", () => {
    thanks_state.classList.remove("hidden")
    rating_state.style.display = "none"

    ratings.forEach(rating => {
        rating.addEventListener("click", () => {
            selected_score.textContent = rating.value;
        })
    })
})
