alert("JS is xorking!");
const button = document.getElementById("toggleMode");

// Load saved mode
if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
    button.textContent = "☀️ Light Mode";
}

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("mode", "dark");
        button.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("mode", "light");
        button.textContent = "🌙 Dark Mode";
    }
});