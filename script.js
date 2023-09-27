document.getElementById("login-toggle").addEventListener("click", function () {
    document.querySelector(".flip-card-inner").style.transform = "rotateY(0deg)";
    this.classList.add("active");
    document.getElementById("signup-toggle").classList.remove("active");
});

document.getElementById("signup-toggle").addEventListener("click", function () {
    document.querySelector(".flip-card-inner").style.transform = "rotateY(180deg)";
    this.classList.add("active");
    document.getElementById("login-toggle").classList.remove("active");
});
