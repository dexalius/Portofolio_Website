const loader = document.querySelector(".container-loader");

function loaderActive(){
    loader.classList.add("loader-active");
}

function loaderActiveTime(){
    setInterval(loaderActive, 1500);
}

window.onload = loaderActiveTime();