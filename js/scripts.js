// Constants for query selector
const customNumberInput = document.getElementById("customNumber");
const customColorButton = document.querySelector(".custColor");
const randomColorButton = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images");
const studentId = "200543635";
const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg"];

// Function to change bg color from user input and add student id
function changeCustomColor() {
    const userInput = Number(customNumberInput.value);
    const body = document.body;

    if (userInput < 0 || userInput > 100) {
        body.style.backgroundColor = "red";
    } else if (userInput >= 0 && userInput <= 20) {
        body.style.backgroundColor = "green";
    } else if (userInput > 20 && userInput <= 40) {
        body.style.backgroundColor = "blue";
    } else if (userInput > 40 && userInput <= 60) {
        body.style.backgroundColor = "orange";
    } else if (userInput > 60 && userInput <= 80) {
        body.style.backgroundColor = "purple";
    } else if (userInput > 80 && userInput <= 100) {
        body.style.backgroundColor = "yellow";
    }

    document.getElementById("myStudentId").innerText = studentId;
}

// Function to change bg color from random number
function changeRandomColor() {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    customNumberInput.value = randomValue;
    changeCustomColor();
}

// Function to generate options for select list
function addList() {
    for (let i = 0; i < imageArray.length; i++) {
        const option = document.createElement("option");
        option.value = imageArray[i];
        option.text = imageArray[i];
        imageSelect.appendChild(option);
    }
}

// Function to change image
function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = `img/${selectedImage}`;
}

// Event listeners
customColorButton.addEventListener("click", changeCustomColor);
randomColorButton.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("change", changeImage);

// Initialize the select list options
addList();
