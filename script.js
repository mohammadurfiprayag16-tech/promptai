const end = Date.now() + 86400000;

setInterval(() => {
    let d = end - Date.now();
    if (d < 0) d = 0;

    let h = Math.floor(d / 3600000);
    let m = Math.floor((d % 3600000) / 60000);
    let s = Math.floor((d % 60000) / 1000);

    document.getElementById("count").textContent =
        `Offer ends in ${h}h ${m}m ${s}s`;
}, 1000);

function saveEmail(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    localStorage.setItem("email", email);

    document.getElementById("pw").style.display = "block";

    return false;
}

function unlock() {
    const password = document.getElementById("pass").value.trim();

    if (password === "1234") {
        document.getElementById("prompt").style.display = "block";
    } else {
        alert("Wrong Password");
    }
}
