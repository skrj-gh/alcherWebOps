const hamburgerIcon=document.querySelector(".hamburger-icon");
const hamburgerMenu=document.querySelector(".hamburger-section")
const navBar=document.querySelector(".navbar");
const guidelineBtns=document.querySelectorAll(".guideline-hover-Btn")
const guidelineLeftSection=document.querySelectorAll(".guideline-left-section");
const guidelineRightSection=document.querySelectorAll(".guideline-right-section");


//When we click on the hamburger menu the hamburger menu should appear 
hamburgerIcon.addEventListener("click",()=>{
    hamburgerMenu.classList.toggle("hamburger-section-show");
    navBar.classList.toggle("hamburger-navbar")
});

guidelineBtns.forEach(guidelineBtn=>{
    guidelineBtn.addEventListener("click",(e)=>{
        //makign other guideline card to be hidden
        guidelineLeftSection.forEach(item=>{
            console.log(item);
            item.classList.remove("guideline-left-show");
        })
        guidelineRightSection.forEach(item=>{
            console.log(item);
            item.classList.remove("guideline-right-show");
        })
        const cardSelected=e.target.parentElement.parentElement.parentElement;
       console.log(cardSelected);
        const guideLineLeftBlock=cardSelected.childNodes[1];
      //  console.log(guideLineLeftBlock);
        const guideLineRightBlock=cardSelected.childNodes[3];
        //console.log(guideLineRightBlock);
        if(cardSelected.className==="row-card-main-container-left"){
            guideLineLeftBlock.classList.add("guideline-left-show");
        }
        else{
           
            guideLineRightBlock.classList.add("guideline-right-show");
        }
        
        
    })
})