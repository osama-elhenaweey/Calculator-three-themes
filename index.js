const toggleContainer = document.querySelector(".toggle-container");
const circle = document.querySelector(".theme-circle");
let currentTheme = 0;

const themes = ["light-theme", "dark-theme", "third-theme"];

function updateTheme() {
    document.body.className = themes[currentTheme];
    const offset = currentTheme * 45; // Adjust offset for the circle movement
    circle.style.transform = `translateX(${offset}px)`;
}

// Event listener and initialization logic stays the same...

toggleContainer.addEventListener("click", (event) => {
    const containerRect = toggleContainer.getBoundingClientRect();
    const clickPosition = event.clientX - containerRect.left;
    const containerWidth = containerRect.width;

    if (clickPosition <= containerWidth / 3) {
        currentTheme = 0; // Light theme
    } else if (clickPosition <= (2 * containerWidth) / 3) {
        currentTheme = 1; // Dark theme
    } else {
        currentTheme = 2; // Third theme
    }

    updateTheme();
});

// Initialize the theme
updateTheme();
// end theme

// const numbers = document.getElementById("numbers");
// window.addEventListener("load", function () {
//     const arrNumbers = Array.from({ length: 9 }, (_, i) => i + 1);

//     numbers.insertAdjacentHTML(
//         "afterbegin",
//         `${arrNumbers.map((el) => `<span>${el}</span>`).join("")}`
//     );
// });
const calcCotent = document.getElementById("calc-content");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
result.textContent = "";
calcCotent.addEventListener("click", function (e) {
    if (e.target.textContent.length > 6) return;
    let operation = e.target.textContent;
    if (e.target.textContent === "DEL") {
        result.textContent = result.textContent.slice(0, -1);
        operation = "";
    }
    if (e.target.textContent === "RESET") {
        result.textContent = "";
        operation = "";
    }
    if (e.target.textContent === "x") {
        operation = "*";
    }

    if (e.target.textContent === "=") {
        try {
            operation = "";
            console.log(result.textContent);
            let res = eval(result.textContent);
            result.textContent = res;
            console.log(res);
        } catch (error) {
            alert(error);
            result.textContent = " ";
        }
    }

    result.textContent += operation;
});
//
// console.log(array);
