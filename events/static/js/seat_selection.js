console.log("Seat selection script loaded.");

const vipContainer = document.getElementById("vip-seats");
const generalContainer = document.getElementById("general-seats");

function createSeats(container, rows, seatsPerRow){

    for(let r = 0; r < rows; r++){

        const row = document.createElement("div");
        row.className = "seat-row";

        const rowLetter = String.fromCharCode(65 + r);

        const label = document.createElement("span");
        label.className = "row-label";
        label.textContent = rowLetter;

        row.appendChild(label);

        for(let s = 1; s <= seatsPerRow; s++){

            const seat = document.createElement("div");

            seat.className = "seat";

            seat.textContent = s;

            seat.dataset.row = rowLetter;
            seat.dataset.seat = s;

            row.appendChild(seat);
        }

        container.appendChild(row);

    }

}

createSeats(vipContainer, 2, 10);
createSeats(generalContainer, 6, 12);

const allSeats = document.querySelectorAll(".seat");

const selectedSeatText = document.getElementById("selected-count");
const selectedSeatList = document.getElementById("selected-seat-list");

let selectedSeats = [];

const params = new URLSearchParams(window.location.search);
const maxSeats = Number(params.get("tickets")) || 1;

console.log("Max Seats =", maxSeats);

function updateSelectedSeatList(){

    if(selectedSeats.length === 0){

        selectedSeatList.textContent = "No seats selected";

        return;

    }

    selectedSeatList.innerHTML = "";

    selectedSeats.forEach(seat => {

        const seatName = document.createElement("div");

        const section = seat.closest("#vip-seats")
            ? "VIP"
            : "General";

        seatName.textContent =
            `${section} - ${seat.dataset.row}${seat.dataset.seat}`;

        selectedSeatList.appendChild(seatName);

    });

}

allSeats.forEach(seat => {

    seat.addEventListener("click", () => {

        if(seat.classList.contains("booked")){
            return;
        }

        if(seat.classList.contains("selected")){

            seat.classList.remove("selected");

            selectedSeats = selectedSeats.filter(
                s => s !== seat
            );

        }
        else{

            if(selectedSeats.length >= maxSeats){
                alert(`You can only select up to ${maxSeats} seats.`);
                return;
            }

            seat.classList.add("selected");

            selectedSeats.push(seat);

        }

        selectedSeatText.textContent = selectedSeats.length;

        updateSelectedSeatList();

    });

});

const continueButton = document.querySelector(".continue-seat");

continueButton.addEventListener("click", () => {

    if(selectedSeats.length !== maxSeats){

        alert(`Please select exactly ${maxSeats} seat(s).`);

        return;

    }

    const seats = selectedSeats.map(seat =>
        `${seat.dataset.row}${seat.dataset.seat}`
    );

    const query = new URLSearchParams({

        tickets: maxSeats,

        seats: seats.join(",")

    });

    window.location.href = `../summary/?${query.toString()}`;

});