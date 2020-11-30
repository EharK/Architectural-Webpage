let galleryimages = document.querySelectorAll(".gallery-img");/*Loeb muutujasse ainult kindlat tüüpi */
let windowWidth = window.innerWidth;

if (galleryimages) {
    galleryimages.forEach(function(image, index) {
            image.onclick = function(){
                let getElementCss= window.getComputedStyle(image);
                let getFullImgUrl = getElementCss.getPropertyValue("background-image"); /*võtab aadressi, millele on klikitud*/
                let getImgUrlPos = getFullImgUrl.split("/img/thumbs/");
                let setNewImgUrl = getImgUrlPos[1].replace('")', '');/*Eemaldab mitte vajalikud asjad.*/
                
                
                let container = document.body;
                let newImgWindow= document.createElement("div"); /*Teeb uue muutuja*/
                container.appendChild(newImgWindow );
                newImgWindow.setAttribute("class","img-window") /*Annab klassi*/
                newImgWindow.setAttribute("onclick","closeImg()") /*Klikkides kasutab funktsiooni "closeimg"*/

                let newImg = document.createElement("img");
                newImgWindow.appendChild(newImg);
                newImg.setAttribute("src", "media/img/" +setNewImgUrl)

            }

    });
}


function closeImg() { /*Funktsioon ette toodud pildi sulgemiseks*/
    document.querySelector(".img-window").remove();

}