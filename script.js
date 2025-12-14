alert("JS loaded");
alert("JS is xorking!");
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggleMode");

    // Load saved mode
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
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
});
