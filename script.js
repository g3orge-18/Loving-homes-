
function submitForm(e) {
  e.preventDefault();
  document.getElementById("message").innerText = "Message sent successfully!";
}

document.querySelectorAll(".see-more-btn").forEach(button => {
    button.addEventListener("click", () => {
        const moreText = button.previousElementSibling;

        if (moreText.style.display === "block") {
            moreText.style.display = "none";
            button.textContent = "See More";
        } else {
            moreText.style.display = "block";
            button.textContent = "See Less";
        }
    });
});

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

function searchFunction() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let items = document.querySelectorAll("#items li");

  items.forEach(item => {
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "" : "none";
  });
}
