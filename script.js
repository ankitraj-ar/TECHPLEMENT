const courseDivs = document.querySelectorAll("div");

courseDivs.forEach(div => {
    div.addEventListener("click", () => {
        const courseName = div.querySelector("h2").textContent;
        if (confirm(`Click on OK to confirm buying ${courseName} course!`)) {
            alert(`Thanks for buying the course. Best of luck!`);
        }
    });
});
