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

let selectedSeats = [];

const maxSeats = 2;

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

    });

});