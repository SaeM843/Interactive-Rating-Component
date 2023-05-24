const form = document.querySelector("score-form")
const submit_btn = document.querySelector(".btn");
const selected_score = document.querySelector(".selected-score");
const rating_state = document.querySelector(".rating-state");
const thanks_state = document.querySelector(".thanks-state");

submit_btn.addEventListener("click", e => {
    e.preventDefault();
    // get rating values //
    const ratings = document.getElementsByName("score");
    const selectedRating = [...ratings].filter(rating => rating.checked === true);
    if (selectedRating.length === 0) return;
    message(selectedRating[0].defaultValue);
    showThankYou();
    })

function message(rating) {
    selected_score.textContent = rating;
}

function showThankYou() {
    rating_state.style.display = "none";
    thanks_state.style.display = "block";
}