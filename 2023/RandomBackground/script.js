
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnExample");

  function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return [r, g, b];
  }

  function applyRandomBackground() {
    const [r, g, b] = randomRGB();
    btn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Calculate luminance to decide text color
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    btn.style.color = luminance < 128 ? "white" : "black";
  }

  btn.addEventListener("click", applyRandomBackground);
  // applyRandomBackground();
});
