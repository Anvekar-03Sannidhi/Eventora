const searchModal = document.getElementById("search-modal");
const searchBtn = document.getElementById("search-btn");
const closeBtn = document.querySelector(".close-search");
const searchInput = document.querySelector(".search-box input");
const trendingEvents = document.querySelector(".trending-events");


searchBtn.addEventListener("click", () => {
    searchModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    searchModal.style.display = "none";
});

searchModal.addEventListener("click", (event) => {
    if(event.target === searchModal){
        searchModal.style.display = "none";
    }
});

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        searchModal.style.display = "none";
    }
});

function createSearchItem(event){

    const card = document.createElement("div");
    card.className = "search-item";
    card.addEventListener("click", () => {
        window.location.href = `/events/${event.id}/`;
    });

    if(event.image){
        const image = document.createElement("img");
        image.src = "/media/" + event.image;
        image.alt = event.title;
        card.appendChild(image);
    }

    const info = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = event.title;
    const venue = document.createElement("p");
    venue.textContent = event.venue;
    info.appendChild(title);
    info.appendChild(venue);
    card.appendChild(info);
    return card;
}

searchInput.addEventListener("input", async () => {

    const query = searchInput.value.trim();

    if(query === ""){
        trendingEvents.replaceChildren();
        return;
    }

    const response = await fetch(
        `/events/search/?q=${query}`
    );

    const events = await response.json();

    trendingEvents.replaceChildren();

    if(events.length === 0){
        const message = document.createElement("p");
        message.textContent = "No events found.";
        trendingEvents.appendChild(message);
        return;
    }
    events.forEach(event => {
        const card = createSearchItem(event);
        trendingEvents.appendChild(card);
    });
});