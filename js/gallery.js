let galleryimages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;

if (galleryimages) {
    galleryimages.forEach(function(image, index) {
            image.onclick = function(){
                let getElementCss= window.getComputedStyle(image);
                let getFullImgUrl = getElementCss.getPropertyValue("background-image");
                let getImgUrlPos = getFullImgUrl.split("/img/thumbs/");
                let setNewImgUrl = getImgUrlPos[1].replace('")', '');
                
                getLatestOpenedImg = index +1;
                
                let container = document.body;
                let newImgWindow= document.createElement("div");
                container.appendChild(newImgWindow );
                newImgWindow.setAttribute("class","img-window")
                newImgWindow.setAttribute("onclick","closeImg()")

                let newImg = document.createElement("img");
                newImgWindow.appendChild(newImg);
                newImg.setAttribute("src", `media/img/${setNewImgUrl}`)

            }

    });
}


function closeImg() {
    document.querySelector(".img-window").remove();

}