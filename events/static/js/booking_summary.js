const params = new URLSearchParams(window.location.search);

const tickets = Number(params.get("tickets"));

const seats = params.get("seats").split(",");

const seatList = document.getElementById("booking-seat-list");

const totalPrice = document.getElementById("total-price");

seats.forEach(seat => {

    const p = document.createElement("p");

    p.textContent = seat;

    seatList.appendChild(p);

});

const ticketPrice = 99;

const ticketTotal = ticketPrice * tickets;

const fee = 18;

const gst = 5;

const grandTotal = ticketTotal + fee + gst;

document.getElementById("ticket-total").textContent = ticketTotal;

document.getElementById("total-price").textContent = grandTotal;

const continueBtn = document.getElementById("continue-payment");

continueBtn.addEventListener("click", () => {

    window.location.href =
        `../payment/?${window.location.search.substring(1)}`;

});