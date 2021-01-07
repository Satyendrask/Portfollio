let theme = localStorage.getItem('theme');
let themeDots = document.querySelectorAll(".theme-dot");

if (theme == null) {
    setTheme('light');

}
else {
    setTheme(theme);
}

function setTheme(mode) {
    if (mode == 'light') {
        document.querySelector("#theme-style").href = "./default.css";
    } else if (mode == 'blue') {
        document.querySelector("#theme-style").href = "./blue.css";
    } else if (mode == 'green') {
        document.querySelector("#theme-style").href = "./green.css"
    } else if (mode == 'purple') {
        document.querySelector("#theme-style").href = "./purple.css";
    }
    localStorage.setItem('theme', mode);


}

themeDots.forEach(function (themeDot) {
    themeDot.addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
})
