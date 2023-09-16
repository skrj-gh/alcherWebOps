// const hamburgerIcon=document.querySelector(".hamburger-icon");
// const hamburgerMenu=document.querySelector(".hamburger-section")
// const navBar=document.querySelector(".navbar");

//When we click on the hamburger menu the hamburger menu should appear 
// hamburgerIcon.addEventListener("click",()=>{
//     hamburgerMenu.classList.toggle("hamburger-section-show");
//     navBar.classList.toggle("hamburger-navbar");
// });

// city list selector functionalty

let dropdownicon = document.querySelector('.city-selection-list-input-image');
let dropdownlist = document.querySelector('.city-selection-list-option');
dropdownicon.onclick = function(){
    dropdownicon.classList.toggle('active');
    dropdownlist.classList.toggle('active');
}

function show(anything){
    document.querySelector('.city-selection-list-input-value').innerHTML = anything;
    dropdownicon.classList.toggle('active');
    dropdownlist.classList.toggle('active');
}