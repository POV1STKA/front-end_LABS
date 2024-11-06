document.addEventListener("DOMContentLoaded", function () {
    let firstClick = true;
    const seventhElement = document.getElementById("item7");
    const eighthElement = document.querySelector("#item8");

    if (seventhElement) {
        seventhElement.addEventListener("click", function () {
            if (firstClick) {
                seventhElement.style.backgroundColor = "lightblue";
                seventhElement.style.color = "white";
                firstClick = false;
            } else {
                seventhElement.style.backgroundColor = "";
                seventhElement.style.color = "";
                firstClick = true;
            }
        });
    }

    if (eighthElement) {
        eighthElement.addEventListener("click", function () {
            if (firstClick) {
                eighthElement.style.backgroundColor = "lightcoral";
                eighthElement.style.color = "white";
                firstClick = false;
            } else {
                eighthElement.style.backgroundColor = "";
                eighthElement.style.color = "";
                firstClick = true;
            }
        });
    }

    const imageContainer = document.getElementById("imageContainer");

    document.getElementById("addImage").addEventListener("click", function () {
        if (!document.getElementById("mainImage")) {
            const newImg = document.createElement("img");
            newImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emirates_Palace.jpg/800px-Emirates_Palace.jpg";
            newImg.alt = "Абу-Дабі";
            newImg.width = 600;
            newImg.id = "mainImage";
            imageContainer.appendChild(newImg);
        }
    });

    document.getElementById("increaseImage").addEventListener("click", function () {
        const mainImage = document.getElementById("mainImage");
        if (mainImage) {
            mainImage.width *= 1.2;
        }
    });

    document.getElementById("decreaseImage").addEventListener("click", function () {
        const mainImage = document.getElementById("mainImage");
        if (mainImage) {
            mainImage.width *= 0.8;
        }
    });

    document.getElementById("removeImage").addEventListener("click", function () {
        const mainImage = document.getElementById("mainImage");
        if (mainImage) {
            mainImage.remove();
        }
    });
});
