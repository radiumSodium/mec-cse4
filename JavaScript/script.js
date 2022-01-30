

window.addEventListener("load", ()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
/* .............. Page-Loader ................*/
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() =>{
    document.querySelector(".page-loader").style.display = "none";
    },600);
});

/* .............. Toggle navbar ................*/

const navToggle = document.querySelector(".nav-toggler");
navToggle.addEventListener("click", ()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");

}
/* ..............  Active Section................*/

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){

        //activate the overlay to prevent multiple clicks

        document.querySelector(".overlay").classList.add("active");
        navToggle.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");

        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggle.classList.remove("hide");
        document.querySelector(".overlay").classList.remove("active");

        },500);
    };
});

/* ..............  About tab ................*/

var tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer = addEventListener("click", (e)=>{
    if(e.target.classList.contains("tab-item")&& !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})

/* ..............  Explore Item Detail Popup ................*/

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("view-expand-btn")){
        toggleExplorePopup();
        document.querySelector(".explore-popup").scrollTo(0,0);
        exploreItemDetails(e.target.parentElement);
    }
})

function toggleExplorePopup(){
    document.querySelector(".explore-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".xp-close").addEventListener("click", toggleExplorePopup);


//hide item when clicked outside
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("xp-inner")){
        toggleExplorePopup()
    }
});


function exploreItemDetails(exploreItem){
    document.querySelector(".xp-thumbnail img").src= 
    exploreItem.querySelector(".explore-item-thumbnail img").src;

    document.querySelector(".xp-header h3").innerHTML=
    exploreItem.querySelector(".explore-item-title").innerHTML;

    document.querySelector(".xp-body").innerHTML=
    exploreItem.querySelector(".explore-item-details").innerHTML;
}