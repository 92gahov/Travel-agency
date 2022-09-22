var excursions = document.getElementById("excursions");
var excursionsButton = document.getElementById("excursionsButton");
var closeExcursions = document.getElementById("closeB");
var body = document.getElementById("body");
excursionsButton.addEventListener("click", function (e) {
    excursions.style.height = "424px";
    e.stopPropagation();
});
closeExcursions.addEventListener("click", function (e) {
    excursions.style.height = "0";
    e.stopPropagation();
});
excursions.addEventListener("click", function (e) {
    excursions.style.height = "424px";
    e.stopPropagation();
});
body.addEventListener("click", function () {
    excursions.style.height = "0";
});

///////////////////////////////////////////////////////////////////////

document.getElementById("logo").addEventListener("click", function () {
    location.assign("Home-page.html");
})
///////////////////////////////////////////////////////////////////////////

window.addEventListener("DOMContentLoaded", function () {
    day();
    night();
})
var h = new Date().getHours();
function day() {
    if (h === 08) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 09) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "120px";
        document.getElementById("sun").style.top = "70px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 10) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "300px";
        document.getElementById("sun").style.top = "40px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 11) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "460px";
        document.getElementById("sun").style.top = "40px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 12) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "650px";
        document.getElementById("sun").style.top = "40px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 13) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "880px";
        document.getElementById("sun").style.top = "40px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 14) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "1000px";
        document.getElementById("sun").style.top = "60px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 15) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "1080px";
        document.getElementById("sun").style.top = "70px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 16) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "1190px";
        document.getElementById("sun").style.top = "100px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    } else if (h === 17) {
        document.getElementById("sun").style.display = "block";
        document.getElementById("sun").style.left = "1260px";
        document.getElementById("sun").style.top = "130px";
        document.getElementById("moon").style.display = "none";
        document.getElementById("dark-cloud").style.display = "none";
        document.getElementById("cloud").style.display = "block";
        document.getElementById("airplane-main").classList.remove("change-hover");
        document.getElementById("airplane-main").classList.remove("change-border");
        document.getElementById("airplane-main").classList.remove("night");
    }
}

function night() {
    if (h === 18) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 19) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "60px";
        document.getElementById("moon").style.top = "125px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 20) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "140px";
        document.getElementById("moon").style.top = "100px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 21) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "270px";
        document.getElementById("moon").style.top = "85px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 22) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "380px";
        document.getElementById("moon").style.top = "60px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 23) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "500px";
        document.getElementById("moon").style.top = "60px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 00) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "670px";
        document.getElementById("moon").style.top = "60px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 01) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "730px";
        document.getElementById("moon").style.top = "60px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 02) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "820px";
        document.getElementById("moon").style.top = "60px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 03) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "900px";
        document.getElementById("moon").style.top = "60px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 04) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "980px";
        document.getElementById("moon").style.top = "70px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 05) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "1080px";
        document.getElementById("moon").style.top = "90px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 06) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "1170px";
        document.getElementById("moon").style.top = "125px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    } else if (h === 07) {
        document.getElementById("sun").style.display = "none";
        document.getElementById("cloud").style.display = "none";
        document.getElementById("moon").style.display = "block";
        document.getElementById("moon").style.left = "1290px";
        document.getElementById("moon").style.top = "150px";
        document.getElementById("dark-cloud").style.display = "block";
        document.getElementById("airplane-main").classList.add("change-hover");
        document.getElementById("airplane-main").classList.add("change-border");
        document.getElementById("airplane-main").classList.add("night");
    }
}
//////////////////////////////////////////////////////////////////////

var showForm = document.getElementById("showForm");
var form = document.getElementById("suitcaseForm");
var closeForm = document.getElementById("closeForm");
showForm.addEventListener("click", function () {
    form.animate([{ transform: "translateY(-196px)" }], { duration: 600 });
    form.style.transition = "0.6s";
    setTimeout(function () {
        form.style.transform = "translateY(-196px)";
    }, 600);
    setTimeout(function () {
        form.style.zIndex = "2";
    }, 600);
    setTimeout(function () {
        form.style.height = "356px";
    }, 700);
});
closeForm.addEventListener("click", function () {
    form.style.height = "160px";
    setTimeout(function () {
        form.style.zIndex = "0";
    }, 500);
    setTimeout(function () {
        form.animate([{ transform: "translateY(0px)" }], { duration: 600 });
    }, 1400);
    setTimeout(function () {
        form.style.transform = "translateY(0px)";
    }, 800);
});
