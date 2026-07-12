const params = new URLSearchParams(window.location.search);

const tickets = Number(params.get("tickets"));

const seats = params.get("seats").split(",");

const seatList = document.getElementById("payment-seat-list");

const ticketTotal = document.getElementById("ticket-total");

const grandTotal = document.getElementById("grand-total");

const payBtnTotal = document.getElementById("pay-btn-total");

// Display Selected Seats
seats.forEach(seat => {

    const p = document.createElement("p");

    p.textContent = seat;

    seatList.appendChild(p);

});

// Price Calculation
const ticketPrice = 99;

const bookingFee = 18;

const gst = 5;

const totalTicketPrice = ticketPrice * tickets;

const finalAmount = totalTicketPrice + bookingFee + gst;

// Update UI
ticketTotal.textContent = totalTicketPrice;

grandTotal.textContent = finalAmount;

payBtnTotal.textContent = finalAmount;

// Payment Button
document.querySelector(".pay-btn").addEventListener("click", () => {

    const currentUrl = window.location.pathname;

    // currentUrl = /events/1/payment/

    const successUrl =
        currentUrl.replace("/payment/", "/payment-success/") +
        `?tickets=${tickets}&seats=${seats.join(",")}&amount=${finalAmount}`;

    window.location.href = successUrl;

});