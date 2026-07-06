const colors = document.querySelectorAll(".color");

colors.forEach(color=>{

    color.addEventListener("click",()=>{

        colors.forEach(item=>{

            item.classList.remove("active");

        });

        color.classList.add("active");

    });

});

const sizes = document.querySelectorAll(".size");

sizes.forEach(size => {

    size.addEventListener("click", () => {

        sizes.forEach(item => {

            item.classList.remove("active");

        });

        size.classList.add("active");

    });

});


const cartBtn = document.querySelector(".add-cart");
const toast = document.querySelector(".toast");

cartBtn.addEventListener("click",()=>{

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

});

const images = document.querySelectorAll(".slide");

images.forEach(image=>{

    image.addEventListener("dblclick",()=>{

        image.classList.toggle("zoom");

    });

});

const header = document.querySelector(".highlight-header");

header.addEventListener("click", () => {
    highlightContent.classList.toggle("hide");
    toggleBtn.classList.toggle("active");
});


// Read More

const description = document.getElementById("description-text");
const readMoreBtn = document.getElementById("readMoreBtn");

readMoreBtn.addEventListener("click",()=>{

    description.classList.toggle("show");

    if(description.classList.contains("show")){

        readMoreBtn.innerHTML="Read Less";

    }else{

        readMoreBtn.innerHTML="Read More";

    }

});

// Collapse Section

const descriptionToggle=document.querySelector(".description-toggle");
const descriptionContent=document.querySelector(".description-content");

descriptionToggle.addEventListener("click",()=>{

    descriptionContent.classList.toggle("hide");

    descriptionToggle.classList.toggle("active");

});

const reviewToggle = document.querySelector(".review-toggle");
const reviewContent = document.querySelector(".review-content");

reviewToggle.addEventListener("click", () => {

    reviewContent.classList.toggle("hide");
    reviewToggle.classList.toggle("active");

});