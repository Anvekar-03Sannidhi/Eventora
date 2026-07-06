const ticketModal = document.getElementById("ticket-modal");

const bookBtn = document.querySelector(".book-btn");

const closeTicket = document.querySelector(".close-ticket");

const continueBtn = document.getElementById("continue-btn");

const countButtons = document.querySelectorAll(".count-btn");

let selectedCount = 1;

// Open Modal
bookBtn.addEventListener("click", (event) => {

    event.preventDefault();

    ticketModal.style.display = "flex";

});

// Close using X
closeTicket.addEventListener("click", () => {

    ticketModal.style.display = "none";

});

// Close by clicking outside
ticketModal.addEventListener("click", (event) => {

    if(event.target === ticketModal){

        ticketModal.style.display = "none";

    }

});

// ESC key
document.addEventListener("keydown", (event) => {

    if(event.key === "Escape"){

        ticketModal.style.display = "none";

    }

});

// Select ticket count
countButtons.forEach(button => {

    button.addEventListener("click", () => {

        countButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedCount = button.dataset.count;

    });

});

// Continue to Seat Selection Page
continueBtn.addEventListener("click", () => {

    window.location.href = `seats/?tickets=${selectedCount}`;

});