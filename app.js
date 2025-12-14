async function fetchTopArtists() {
    try {
      const response = await fetch("/api/top-artists");
      const data = await response.json();
  
      const container = document.getElementById("artists");
      data.items.forEach(artist => {
        const div = document.createElement("div");
        div.className = "artist-card";
        div.innerHTML = `
          <img src="${artist.images[0]?.url}" alt="${artist.name}" />
          <p>${artist.name}</p>
        `;
        container.appendChild(div);
      });
    } catch (err) {
      console.error("Error fetching artists:", err);
    }
  }
  
  document.addEventListener("DOMContentLoaded", fetchTopArtists);
  