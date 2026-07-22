document.getElementById("year").textContent = new Date().getFullYear();

console.log(
    "%cwoah, poking around huh?",
    "color: #6b4f3a; font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: bold;"
);
console.log(
    "%cwhat are you looking for?",
    "color: #6b6258; font-family: 'JetBrains Mono', monospace; font-size: 13px;"
);
console.log(
    "%cif you're here for the devtools then i'll just leave you alone",
    "color: #6b6258; font-family: 'JetBrains Mono', monospace; font-size: 13px;"
);


const categories = {
    music:  { title: "Music",  file: "Data/music.json" },
    games:  { title: "Games",  file: "Data/games.json" },
    movies: { title: "Movies", file: "Data/movies.json" },
    anime:  { title: "Anime",  file: "Data/anime.json" },
    books:  { title: "Books",  file: "Data/books.json" }
};

async function loadInterests() {
    const container = document.querySelector("#interests-container");

    if (!container) {
        console.error("Could not find #interests-container");
        return;
    }

    for (const category of Object.values(categories)) {
        try {
            const response = await fetch(category.file);

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status} while loading ${category.file}`
                );
            }

            const items = await response.json();

            createCategory(
                container,
                category.title,
                items
            );

        } catch (error) {
            console.error(
                `Could not load ${category.title}:`,
                error
            );
        }
    }
}


function createCategory(container, categoryTitle, items) {
    const section = document.createElement("section");
    section.className = "interests-category";

    const heading = document.createElement("h2");
    heading.textContent = categoryTitle;

    const scroll = document.createElement("div");
    scroll.className = "media-scroll";

    const track = document.createElement("div");
    track.className = "media-track";

    items.forEach(item => {
        const title = item.title || item.name || "Unknown";
        const image = item.image || item.cover || item.poster || "";

        const mediaItem = document.createElement("div");
        mediaItem.className = "media-item";

        if (categoryTitle === "Movies" || categoryTitle === "Games") {
            mediaItem.classList.add("poster-wide");
        }

        const poster = document.createElement("div");
        poster.className = "media-poster";

        const img = document.createElement("img");
        img.className = "cover-img";
        img.src = image;
        img.alt = title;
        img.loading = "lazy";

        const overlay = document.createElement("div");
        overlay.className = "media-hover-overlay";

        const titleElement = document.createElement("span");
        titleElement.className = "media-title";
        titleElement.textContent = title;

        poster.appendChild(img);
        poster.appendChild(overlay);
        poster.appendChild(titleElement);

        mediaItem.appendChild(poster);
        track.appendChild(mediaItem);
    });

    scroll.appendChild(track);

    section.appendChild(heading);
    section.appendChild(scroll);

    container.appendChild(section);

    addDragScrolling(scroll);
}


function addDragScrolling(scroll) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    scroll.addEventListener("mousedown", event => {
        isDown = true;
        scroll.classList.add("dragging");

        startX = event.pageX - scroll.offsetLeft;
        scrollLeft = scroll.scrollLeft;
    });

    scroll.addEventListener("mouseleave", () => {
        isDown = false;
        scroll.classList.remove("dragging");
    });

    scroll.addEventListener("mouseup", () => {
        isDown = false;
        scroll.classList.remove("dragging");
    });

    scroll.addEventListener("mousemove", event => {
        if (!isDown) return;

        event.preventDefault();

        const x = event.pageX - scroll.offsetLeft;
        const walk = x - startX;

        scroll.scrollLeft = scrollLeft - walk;
    });
}


loadInterests();