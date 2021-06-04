document.querySelector(".burger").onclick = function() {myFunction()};

function myFunction() {
    document.querySelector('.nav-links').classList.toggle("activo");
}


myFunction();
