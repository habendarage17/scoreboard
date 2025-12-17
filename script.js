// Example: animate color change based on rank
const scores = [
  { id: "sapphire", score: 150 },
  { id: "crystal", score: 130 },
  { id: "opal", score: 128 },
  { id: "diamond", score: 110 }
];

function updateScoreboard() {
  // Sort descending
  scores.sort((a, b) => b.score - a.score);

  // Update HTML and animate
  const container = document.querySelector(".scoreboard");
  container.innerHTML = "";
  scores.forEach((house, index) => {
    const div = document.createElement("div");
    div.className = "house";
    div.id = house.id;
    div.innerText = `${house.id.charAt(0).toUpperCase() + house.id.slice(1)}: ${house.score}`;
    div.style.background = `hsl(${index * 60}, 70%, 80%)`; // different colors by rank
    container.appendChild(div);
  });
}

// Call every time you manually update scores
updateScoreboard();
